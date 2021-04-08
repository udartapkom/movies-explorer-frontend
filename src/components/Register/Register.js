import React from 'react'
import Form from '../Form/Form';

function Register(){
    return(
<>
        <Form 
        fomName = 'register'
        className = 'Form__login'
        title = 'Добро пожаловать!'
        buttonText = 'Зарегистрироваться'
        buttonModificator = '_window_signup'
        loginText = 'Уже зарегистрированы?'
        loginTextModificator = 'Form__login-text_type_text'
        linkText = 'Войти'
        loginLinkModificator = 'Form__login-text_type_link'
        linkTo = '/signin'
        modificator = 'Logo_type_form-register'
        >
            <label htmlFor = 'name' className = 'Form__label'>Имя</label>
            <input id = 'name' className = 'Form__input' required/>
            <label htmlFor = 'email' className = 'Form__label'>E-mail</label>
            <input id = 'email' type = 'email' className = 'Form__input' name = 'email' required defaultValue = 'karakoom@ya.ru'/>
            <label htmlFor = 'password' className = 'Form__label'>Пароль</label>
            <input id = 'password' type = 'password' className = 'Form__input' name = 'password' required/>
        </Form>
        </>
    )
}
export default Register;