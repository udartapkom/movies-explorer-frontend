import React from "react";

function FilterCheckbox(props) {
  return (
    <div className = 'FilterCheckbox' >
      <input type="checkbox" name={props.name} id={props.name} className="FilterCheckbox__swich" />
      <label htmlFor={props.name} className="FilterCheckbox__text">
        {props.text}
      </label>
    </div>
  );
}
export default FilterCheckbox;
