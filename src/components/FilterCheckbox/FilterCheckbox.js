import React from "react";

function FilterCheckbox(props) {

  function handleOnChange(event) {
    props.onFilter(event.target.checked);
  }

  return (
    <div className = 'FilterCheckbox' >
      <input type="checkbox" name={props.name} id={props.name} className="FilterCheckbox__swich" onChange={handleOnChange}/>
      <label htmlFor={props.name} className="FilterCheckbox__text">
        {props.text}
      </label>
    </div>
  );
}
export default FilterCheckbox;
