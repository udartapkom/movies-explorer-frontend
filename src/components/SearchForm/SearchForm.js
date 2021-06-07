import React from 'react'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props){

const { name, onSubmitSearch, onFilterShort } = props;

const [query, setQuery] = React.useState('');

  
  function handleOnChange(evt) {
    setQuery(evt.target.value);
  }
  function handleOnSubmit(evt) {
    evt.preventDefault();
    onSubmitSearch(query);
  }
      
    return(
        <form name = { name } className='SearchForm' onSubmit={handleOnSubmit}>
        <div className="SearchForm__content">
          <input
          name="search-text"
          id="search-text"
          className="SearchForm__text"
          placeholder="Фильм" type="text"
          required
          onChange={handleOnChange}
          />
          <button className="SearchForm__button" type="submit" />
        </div>
        <div className="SearchForm__swich">
         <FilterCheckbox name="short" text="Короткометражки" onFilter={onFilterShort} /> 
        </div>
      </form>
    )
}
export default SearchForm;