import React from "react";
import { Link } from 'react-router-dom';

function LoginMenu(){
    return(
    <ul className = "Login__menu">
        <li className = "List__style"><Link to="/signup" className = "Header__link">Регистрация</Link></li>
        <li className = "List__style"><Link to="/signin" className = "Header__link Header__link_type_signin">Войти</Link></li>
    </ul>
    )
}
export default LoginMenu;