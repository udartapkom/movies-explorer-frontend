import React from 'react';

function NavTab(){
    return(
            <nav className = 'NavTab'>
                <ul className = 'NavTab__menu'>
                    <li className = 'NavTab__list'><a className = 'NavTab__link' href ='#AboutProject'>О проекте</a></li>
                    <li className = 'NavTab__list'><a className = 'NavTab__link' href ='#Tech'>Технологии</a></li>
                    <li className = 'NavTab__list'><a className = 'NavTab__link' href ='#AboutMe'>Студент</a></li>
                </ul>
            </nav>
    )
}
export default NavTab;