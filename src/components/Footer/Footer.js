import React from 'react';

function Footer(){
    return(
        <footer className = 'Footer'>
            <div className = 'Footer__content'>
                <p className = 'Footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className = 'Footer__links-block'>
                    <p className = 'Footer__link Footer__link_type_copyright'>&copy; 2021</p>
                    <div className = 'Footer__links'>
                        <a href = 'https://praktikum.yandex.ru/' className = 'Footer__link'>Яндекс.Практикум</a>
                        <a href = 'https://github.com' className = 'Footer__link'>Github</a>
                        <a href = 'https://facebook.com' className = 'Footer__link'>Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;