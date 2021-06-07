import React from 'react'
import { NavLink } from 'react-router-dom';
import iconprofile from '../../images/iconprofile.svg';

function DesktopNavigation(){
    return(
        <div className = 'DesktopNavigation__nav' >
        <div className = 'DesktopNavigation__nav-links'>
            <NavLink to = '/movies' className = 'DesktopNavigation__link '>Фильмы</NavLink>
            <NavLink to = '/saved-movies' className = 'DesktopNavigation__link'>Сохранённые фильмы</NavLink>
        </div>
        <NavLink to = '/profile' className = 'DesktopNavigation__profile DesktopNavigation__link'>
            <p className = 'DesktopNavigation__link_type_profile'>Аккаунт</p>
            <div className = 'DesktopNavigation__icon-background'>
                <img src = { iconprofile } className = 'DesktopNavigation__icon-profile' alt = 'редактировать профиль'></img>
            </div>
        </NavLink>
        </div>
    )
}
export default DesktopNavigation;
