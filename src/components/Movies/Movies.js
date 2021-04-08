import React from 'react'
import HeaderMovie from '../HeaderMovie/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesArray from '../../utils/moviesArray';

let sliceNumber = 7;
const moviesList = moviesArray.map((movies) => {
    return movies;
});

const trimMoviesList =  moviesList.slice(0, sliceNumber);

export const likedMovies = moviesList.filter((movie) => movie.isLike === true);

function Movies(){
    return(
        <>
<HeaderMovie modificator = 'Logo_type_form-profile'/>
<SearchForm name = 'searchForm' />
<MoviesCardList movies = { trimMoviesList }/>
<Footer />
        </>
    )
}
export default Movies;