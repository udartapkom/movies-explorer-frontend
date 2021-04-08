import React from 'react'
import { Link } from 'react-router-dom';
import HeaderMovie from '../HeaderMovie/HeaderMovie'

const name = 'Виталий';

function handleSubmit(event) {
    event.preventDefault();
  }

function Profile() {
    return(
        <>
        <HeaderMovie 
        modificator = 'Logo_type_form-profile'
        />
        <section className = 'Profile'>
            <h2 className = 'Profile__title'>Привет, { name }</h2>
            <form name = 'profile' className = 'Profile__info' onSubmit = { handleSubmit }>
            <div className = 'Profile__form'>
              <label className = 'Profile__label' htmlFor='name'>Имя</label>
              <input className = 'Profile__input Profile__label Profile__label_type_weight' id="name" defaultValue = 'Роман' required />
            </div>
            <div className='Profile__form'>
              <label className = 'Profile__label' htmlFor='email'>E-mail</label>
              <input type = 'email' className = 'Profile__input Profile__label Profile__label_type_weight' id="email" defaultValue = 'karakoom@ya.ru' required />
            </div>
            <button className = 'Profile__submit-button' type="submit">Редактировать</button>
            </form>
            <Link to = '/' className = 'Profile__signout'>Выйти из аккаунта</Link>
        </section>
        </>
    )
}
export default Profile;