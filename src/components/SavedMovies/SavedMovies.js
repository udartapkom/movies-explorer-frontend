import React from 'react'
import Header from '../HeaderMovie/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props){
    console.log(props);
    return(
        <>
    <Header modificator = 'Logo_type_form-profile'></Header>
    <SearchForm />
    <MoviesCardList movies = { props.movies } isRemove/>
    <Footer />
    </>
    )
}
export default SavedMovies;