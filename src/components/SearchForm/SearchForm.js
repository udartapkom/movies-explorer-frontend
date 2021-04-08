import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props){

    function handleSubmit(event) {
        event.preventDefault();
      }
    return(
        <form name={props.name} className='SearchForm' noValidate onSubmit={handleSubmit}>
        <div className="SearchForm__content">
          <input name="search-text" id="search-text" className="SearchForm__text" placeholder="Фильм" type="text" required />
          <button className="SearchForm__button" type="submit" disabled/>
        </div>
        <div className="SearchForm__swich">
         <FilterCheckbox name="short" text="Короткометражки" /> 
        </div>
      </form>
    )
}
export default SearchForm;