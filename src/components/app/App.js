import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
<>
<Switch>
<Route exact path = '/'>
      <Main />
    </Route>
    <Route path = '/movies'>
      <Movies />
    </Route>
    <Route path = '/saved-movies'>
      <SavedMovies />
    </Route>
    <Route path = '/profile'>
      <Profile />
    </Route>
    <Route path = '/signin'>
      <Login />
    </Route>
    <Route path = '/signup'>
      <Register />
    </Route>
    <Route path = '*'>
      <NotFound />
    </Route>
</Switch>

</>
  );
}

export default App;
