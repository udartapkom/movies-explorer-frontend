import React from 'react';
import Form from '../Form/Form';

function Login() {
    return(
    <>
        <Form 
        fomName = 'login'
        className = 'Form__login'
        title = 'Рады видеть!'
        buttonText = 'Войти'
        loginText = 'Ещё не зарегистрированы?'
        loginTextModificator = 'Form__login-text_type_text'
        linkText = 'Регистрация'
        loginLinkModificator = 'Form__login-text_type_link'
        linkTo = '/signup'
        modificator = 'Logo_type_form-register'
        >
            <label htmlFor="email" className="Form__label">E-mail</label>
            <input id="email" type="email" className="Form__input" name='email' required defaultValue="karakoom@ya.ru"/>
            <label htmlFor="password" className="Form__label">Пароль</label>
            <input id="password" type="password" className="Form__input" name='password' required/>
        </Form>
    </>
    )
}
export default Login;