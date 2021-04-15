import React from 'react'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Form(props) {
  return (
    <>
      <section className="Form">
        <form
          noValidate
          name={props.formName}
          action="post"
          className={`${props.className}`}
          onSubmit={props.handleOnSubmit}
        >
          <Logo {...props} />
          <h2 className="Form__title">{props.title}</h2>
          {props.children}

          <button
            disabled={!props.isValidForm}
            className={` Form__button Form__button${props.buttonModificator} Form__button${
              props.isValidForm ? "_state_enable" : "_state_disable"
            }`}
          >
            {props.buttonText}
          </button>
        </form>
        <div className="Form__texts-block">
          <p className={`Form__login-text ${props.loginTextModificator}`}>{props.loginText}</p>
          <Link to={props.linkTo} className={`Form__login-text ${props.loginLinkModificator}`}>
            {props.linkText}
          </Link>
        </div>
      </section>
    </>
  );
}
export default Form;

