import React from 'react';
import Form from '../Form/Form';
import useFormWithValidation from '../Validation/Validation';

function Login(props) {
    const { onSubmitLogin } = props;

    const {
      values,
      errors,
      isValidForm,
      handleInputChange,

    } = useFormWithValidation({})

      function handleOnSubmit(event) {
        event.preventDefault();
        onSubmitLogin(values);
      }
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
        isValidForm={isValidForm}
        handleOnSubmit={handleOnSubmit}
        >
            <label htmlFor="email" className="Form__label">E-mail</label>
            <input
            id="email"
            type="email"
            className="Form__input"
            name='email'
            required
            minLength="5"
            maxLength="50"
            onChange={handleInputChange}
            />
            <label htmlFor="email" className="Form__label Form__label_type_error">{errors.email}</label>

            <label htmlFor="password" className="Form__label">Пароль</label>
            <input
            id="password"
            type="password"
            className="Form__input"
            name='password'
            minLength="6"
            required
            onChange={handleInputChange}
            />
            <label htmlFor="password" className="Form__label Form__label_type_error">{errors.password}</label>
        </Form>
    </>
    )
}
export default Login;