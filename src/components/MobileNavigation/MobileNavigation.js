import React from "react";
import { Link } from "react-router-dom";
import iconprofile from '../../images/iconprofile.svg';

function MobileNavigation() {
  return (
    <nav className="MobileNavigation__hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className="MobileNavigation__menu-btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <div className="MobileNavigation__box-shadow"></div>
      <ul className="MobileNavigation__menu-box">
          <div>
          <li>
          <Link to="/" className="MobileNavigation__menu-item">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/movies" className="MobileNavigation__menu-item">
            Фильмы
          </Link>
        </li>
        <li>
          <Link to="/saved-movies" className="MobileNavigation__menu-item">
            Сохранённые фильмы
          </Link>
        </li>
          </div>
        <div className = 'DesktopNavigation__acc-button'>
        <Link to = '/profile' className = 'DesktopNavigation__profile DesktopNavigation__link'>
            <p className = 'DesktopNavigation__link_type_profile'>Аккаунт</p>
            <div className = 'DesktopNavigation__icon-background'>
                <img src = { iconprofile } className = 'DesktopNavigation__icon-profile' alt = 'редактировать профиль'></img>
            </div>
        </Link>
        </div>
      </ul>
      

     
    </nav>
  );
}
export default MobileNavigation;
