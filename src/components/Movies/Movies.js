import React from 'react'
import HeaderMovie from '../HeaderMovie/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

    const [shortFilm, setShortFilm] = React.useState(false);


    function onFilterShort(filterOn) {
        setShortFilm(filterOn);
      }
    
      function filterShortFilm(movies) {
        return movies.filter((item) => {
          return item.duration < 40;
        })
      }
    
  return (
    <>
      <HeaderMovie modificator="Logo_type_form-profile" />
      <SearchForm 
      name="searchForm"
      { ...props }
      onFilterShort={onFilterShort}
      />
        {props.isLoading && <Preloader />}

{!props.isLoading && props.loadingError === '' &&
      <MoviesCardList 
      movies={shortFilm? filterShortFilm(props.movies) : props.movies} 
      savedMovies={props.savedMovies}
      onBookmarkClick={props.onBookmarkClick}
      isSavedMovie={props.isSavedMovie}
      />
}
{
  !props.isLoading && props.loadingError !== '' && <div className = 'Movies__inform'>{props.loadingError}</div>
}
      <Footer />
    </>
  );
}
export default Movies;