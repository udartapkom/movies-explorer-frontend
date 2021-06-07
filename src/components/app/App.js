import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Popup from '../../components/Popup/Popup';

function App() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [loadingError, setLoadingError] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();
  let location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            getCurrentUser();
            history.push(path);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }, []);

  function onSubmitRegister({ name, email, password }) {
    if (!name || !email || !password) {
      return;
    }
    mainApi
      .register(name, email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          login(email, password);
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setTextPopup("Пользователь с таким email уже существует");
          setIsInfoPopupOpen(true);
        } else {
          setTextPopup("При регистрации произошла ошибка");
          setIsInfoPopupOpen(true);
        }
      });
  }

  function login(email, password) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          setLoggedIn(true);
          getCurrentUser();
          history.push("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setTextPopup("Неверный email или пароль");
          setIsInfoPopupOpen(true);
        } else {
          setTextPopup("При авторизации произошла ошибка");
          setIsInfoPopupOpen(true);
        }
      });
  }

  function onSubmitLogin({ email, password }) {
    if (!email || !password) {
      return;
    }
    login(email, password);
  }

  function getCurrentUser() {
    const token = localStorage.getItem("token");
    mainApi
      .getCurrentUser(token)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          localStorage.setItem("currentUser", JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSaveProfile(data) {
    console.log(data);
    mainApi
      .saveProfile(data)
      .then((profile) => {
        setCurrentUser(profile);
        setTextPopup("Профиль успешно обновлен");
        setIsInfoPopupOpen(true);
      })
      .catch((err) => {
        if (err.status === 409) {
          setTextPopup("Пользователь с таким email уже существует");
        } else {
          setTextPopup("При обновлении профиля произошла ошибка");
        }
        setIsInfoPopupOpen(true);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setLoggedIn(false);
    setCurrentUser({});

    localStorage.removeItem("initialMovies");
    localStorage.removeItem("savedMovies");
    setInitialMovies([]);
    setSavedMovies([]);
    setFilterMovies([]);
    setFilterSavedMovies([]);

    history.push("/");
  }

  const [initialMovies, setInitialMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  const [query, setQuery] = React.useState("");

  function getInitialMovies() {
    moviesApi
      .getMovies()
      .then((data) => {
        const initialArray = data.map((item) => {
          const imageURL = item.image ? item.image.url : "";
          return {
            ...item,
            image: `https://api.nomoreparties.co${imageURL}`,
            trailer: item.trailerLink,
          };
        });

        localStorage.setItem("initialMovies", JSON.stringify(initialArray));
        setInitialMovies(initialArray);
      })
      .catch((err) => {
        localStorage.removeItem("initialMovies");
        setLoadingError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  function getSavedMovies() {
    mainApi
      .getMoveis()
      .then((data) => {
        const savedArray = data.map((item) => {
          return { ...item, id: item.movieId };
        });
        localStorage.setItem("savedMovies", JSON.stringify(savedArray));
        setSavedMovies(savedArray);
      })
      .catch((err) => {
        localStorage.removeItem("savedMovies");
        setLoadingError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      });
  }

  React.useEffect(() => {
    const initial = JSON.parse(localStorage.getItem("initialMovies"));
    if (initial) {
      setInitialMovies(initial);
    } else {
      getInitialMovies();
    }

    const saved = JSON.parse(localStorage.getItem("savedMovies"));
    if (saved) {
      setSavedMovies(saved);
    } else {
      getSavedMovies();
    }
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      getInitialMovies();
      getSavedMovies();
    }
  }, [loggedIn]);

  function isSavedMovie(movie) {
    return savedMovies.some((item) => item.id === movie.id);
  }
  function filter(data, query) {
    if (query) {
      const regex = new RegExp(query, "gi");
      const filterData = data.filter((item) => {
        return regex.test(item.nameRU) || regex.test(item.nameEN);
      });
      if (filterData.length === 0) {
        setLoadingError("Ничего не найдено");
      } else {
        setLoadingError("");
      }
      return filterData;
    }
    return [];
  }

  function onSubmitSearch(query) {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(query);
      setFilterMovies(filter(initialMovies, query));
      setIsLoading(false);
    }, 1000);
  }

  function onSubmitSearchSaved(query) {
    setIsLoading(true);
    setTimeout(() => {
      setQuery(query);
      setFilterSavedMovies(filter(savedMovies, query));
      setIsLoading(false);
    }, 1000);
  }

  //избранное
  function onBookmarkClick(movie, isMarked) {
    if (isMarked) {
      addMovie(movie);
    } else {
      deleteMovie(movie);
    }
  }

  //удаление из избранного
  function deleteMovie(movie) {
    const movieId = savedMovies.find((item) => item.id === movie.id)._id;
    mainApi
      .deleteMovies(movieId)
      .then((res) => {
        if (res) {
          const newArray = savedMovies.filter((item) => item.movieId !== res.movieId);
          setSavedMovies(newArray);
        }
      })
      .catch((err) => {
        setTextPopup("На сервере произошла ошибка");
        setIsInfoPopupOpen(true);
      });
  }

  //добавление в избранное
  function addMovie(movie) {
    mainApi
      .createMovie(movie)
      .then((res) => {
        setSavedMovies([...savedMovies, { ...res, id: res.movieId }]);
      })
      .catch((err) => {
        setTextPopup("На сервере произошла ошибка");
        setIsInfoPopupOpen(true);
      });
  }

  React.useEffect(() => {
    setFilterSavedMovies(filter(savedMovies, query));
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);

  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [textPopup, setTextPopup] = React.useState("");

  function onClosePopup() {
    setIsInfoPopupOpen(false);
    setTextPopup("");
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            exac
            path="/movies"
            loggedIn={loggedIn}
            isLoading={isLoading}
            loadingError={loadingError}
            component={Movies}
            savedMovies={false}
            movies={filterMovies}
            onSubmitSearch={onSubmitSearch}
            onBookmarkClick={onBookmarkClick}
            isSavedMovie={isSavedMovie}
          />

          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            isLoading={isLoading}
            loadingError={loadingError}
            component={Movies}
            savedMovies={true}
            movies={filterSavedMovies}
            onSubmitSearch={onSubmitSearchSaved}
            onBookmarkClick={onBookmarkClick}
            isSavedMovie={isSavedMovie}
            
          />

          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onSaveProfile={handleSaveProfile}
            onSignOut={handleSignOut}
          />
          <Route path="/signin">
            <Login onSubmitLogin={onSubmitLogin} />
          </Route>
          <Route path="/signup">
            <Register onSubmitRegister={onSubmitRegister} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Popup title={textPopup} isOpenPopup={isInfoPopupOpen} onClosePopup={onClosePopup} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
