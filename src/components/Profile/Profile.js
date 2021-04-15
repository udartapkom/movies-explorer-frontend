import React from 'react'
import { Link } from 'react-router-dom';
import HeaderMovie from '../HeaderMovie/HeaderMovie'
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';
import useFormWithValidation from '../Validation/Validation';

//const name = 'Виталий';

function Profile(props) {
  const { onSaveProfile, onSignOut } = props;

  const {
    values,
    errors,
    isValidForm,
    handleInputChange,
  } = useFormWithValidation({})

  const currentUser = React.useContext(CurrentUserContext);

  function handleSignOut() {
    onSignOut();
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    onSaveProfile(values);
  }

  return (
    <>
      <HeaderMovie modificator="Logo_type_form-profile" />
      <section className="Profile">
        <h2 className="Profile__title">Привет, {currentUser.name}</h2>
        <form noValidate name="profile" className="Profile__info" onSubmit={handleOnSubmit}>
          <div className="Profile__form">
            <label className="Profile__label" htmlFor="name">
              Имя
            </label>
            <input
              className="Profile__input Profile__label Profile__label_type_weight"
              id="name"
              name="name"
              required
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="name" className="Form__label Form__label_type_error">
            {errors.name}
          </label>

          <div className="Profile__form">
            <label className="Profile__label" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              className="Profile__input Profile__label Profile__label_type_weight"
              id="email"
              name="email"
              required
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="email" className="Form__label Form__label_type_error">
            {errors.email}
          </label>

          <button
            disabled={!isValidForm}
            className={`Profile__submit-button ${
              props.isValidForm && "Profile__submit-button_disabled"
            }`}
            type="submit"
          >
            Редактировать
          </button>
        </form>
        <Link to="/" className="Profile__signout" onClick={handleSignOut}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}
export default Profile;