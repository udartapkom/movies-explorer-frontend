import React from 'react'

function MoviesCard(props){
     const { title, time, imageLink, isLike, isRemove } = props;
    return(
        <div className = 'MoviesCard'>
            <div className = 'MoviesCard__info'>
                <div className = 'MoviesCard__data'>
                <h3 className = 'MoviesCard__name'>{ title }</h3>
                <p className = 'MoviesCard__time'>{ time }</p>
                </div>
                { !isRemove ? <button className = {`MoviesCard__save-button 
                ${ isLike ? 'MoviesCard__save-button_type_like' : 'MoviesCard__save-button_type_dislike'}`} /> : 
                <button className = 'MoviesCard__save-button  MoviesCard__save-button_type_del' ></button> }

            </div>
            <img className = 'MoviesCard__image' src = { imageLink } alt = { title }></img>
        </div>
    )
}
export default MoviesCard;