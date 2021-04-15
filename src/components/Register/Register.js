import React from 'react'
import Form from '../Form/Form';
import useFormWithValidation from '../Validation/Validation';

function Register({onSubmitRegister}){

  const {
    values,
    errors,
    isValidForm,
    handleInputChange,
  } = useFormWithValidation({})

        function handleOnSubmit(event) {
            event.preventDefault();
            onSubmitRegister(values);
          }

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
        handleOnSubmit={handleOnSubmit}
        isValidForm={isValidForm}
        >
            <label htmlFor = 'name' className = 'Form__label'>Имя</label>
            <input
            id = 'name'
            name='name'
            className = 'Form__input'
            required
            minLength="2"
            maxLength="30"
            onChange={handleInputChange}
            />
            <label htmlFor="name" className="Form__label Form__label_type_error">{errors.name}</label>

            <label htmlFor = 'email' className = 'Form__label'>E-mail</label>
            <input
            id = 'email'
            type = 'email'
            className = 'Form__input'
            name = 'email'
            required
            minLength="5"
            maxLength="50"
            onChange={handleInputChange}
            />
            <label htmlFor="email" className="Form__label Form__label_type_error">{errors.email}</label>

            <label htmlFor = 'password' className = 'Form__label'>Пароль</label>
            <input
            id = 'password'
            type = 'password'
            className = 'Form__input'
            name = 'password'
            required
            minLength="6"
            onChange={handleInputChange}
            />
            <label htmlFor="password" className="Form__label Form__label_type_error">{errors.password}</label>
        </Form>
    </>
    )
}
export default Register;
