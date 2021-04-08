import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Logo(props) {
    return(
       <Link to = '/'>
           <img className = {`Logo ${ props.modificator }` } src ={ logo } alt = 'Логотип'></img>
       </Link> 
    )
}
export default Logo;