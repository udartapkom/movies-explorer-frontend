import React from 'react'
import Header from '../HeaderMovie/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { likedMovies } from '../Movies/Movies'

function SavedMovies(){
    return(
        <>
    <Header />
    <SearchForm />
    <MoviesCardList movies = { likedMovies } isRemove/>
    <Footer />
    </>
    )
}
export default SavedMovies;