import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard';
import image from '../../images/filmImage.jpg'; //временное решение

function MoviesCardList({movies, isRemove}){
    return(
        <>
        <section className = 'MoviesCardList'>
            <div className = 'MoviesCardList__content'>
            { movies.map((movie, index) => (
                <MoviesCard 
            isLike = { movie.isLike }
            imageLink = { image }
            title = { movie.title }
            time = { movie.time }
            isRemove = { isRemove }
            key = { index }
            />
            ))}
            </div>
            
        </section>
        <section className = 'MoviesCardList__more'>
            <button className = {`${ movies.length > 6 ? 'MoviesCardList__more-button' : 'MoviesCardList__more-button_hide'}`}>ещё</button>
        </section>
        
        </>
    )
}
export default MoviesCardList;
