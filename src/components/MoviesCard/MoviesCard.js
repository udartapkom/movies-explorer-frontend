import React from "react";

function MoviesCard(props) {
  const { title, time, imageLink, movie, onBookmarkClick, isSavedMovie, savedMovies } = props;

  let isSaved = isSavedMovie(movie);

  function durationFormat(time) {
    const hh = Math.trunc(time / 60);
    const mm = time % 60;
    return `${hh > 0 ? hh + "ч " : ""}${mm}м`;
  }

  function handleBookmarkClick(event) {
    event.preventDefault();
    onBookmarkClick(movie, !isSaved);
  }

  function handleOnDelete() {
    onBookmarkClick(movie, false);
  }
  //console.log(isSavedMovie);
  return (
    <div className="MoviesCard">
      <div className="MoviesCard__info">
        <div className="MoviesCard__data">
          <h3 className="MoviesCard__name">{title}</h3>
          <p className="MoviesCard__time">{durationFormat(time)}</p>
        </div>

        {!savedMovies ? (
          <button
            className={`MoviesCard__save-button  ${
              isSaved ? "MoviesCard__save-button_type_like" : "MoviesCard__save-button_type_dislike"
            }`}
            onClick={handleBookmarkClick}
          />
        ) : (
          <button
            className="MoviesCard__save-button MoviesCard__save-button_type_del"
            onClick={handleOnDelete}
          ></button>
        )}
      </div>
      <a href= {movie.trailerLink} target="blank"><img className="MoviesCard__image" src={imageLink} alt={title}></img></a>
    </div>
  );
}
export default MoviesCard;
