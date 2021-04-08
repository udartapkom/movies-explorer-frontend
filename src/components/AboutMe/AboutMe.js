import React from 'react';
import hero from '../../images/hero.png';
import arrow from '../../images/arrow.svg'

function AboutMe(){
    return(
        <section className = 'AboutMe'>
            <div className = 'AboutMe__content'>
                <h3 id = 'AboutMe' className = 'AboutMe__title'>Студент</h3>
                <div className = 'AboutMe__more'>
                    <div className = 'AboutMe__texts'>
                        <h2 className = 'AboutMe__subtitle'>Виталий</h2>
                        <p className = 'AboutMe__text-profession'>Фронтенд-разрабоотчик, 30 лет</p>
                        <p className = 'AboutMe__text-description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                            и дочь. Я люблю слушать музыку, 
                            а ещё увлекаюсь бегом. 
                            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                            После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <div className = 'AboutMe__links-block-social'>
                            < a href = 'https://facebook.com' className = 'AboutMe__links AboutMe__links_type_social'>Facebook</a>
                            <a href = 'https://github.com' className = 'AboutMe__links AboutMe__links_type_social'>Github</a>
                        </div>
                    </div>
                    <img className = 'AboutMe__photo' src = { hero } alt = 'фотография программиста'></img>
                </div>
                <p className = 'AboutMe__portfolio'>Портфолио</p>
                <div className = 'AboutMe__links-list'>
                    <a href = 'https://github.com' className = 'AboutMe__links AboutMe__links_type_example'>Статичный сайт <img src = { arrow } alt = 'стрелка'></img></a>
                    <a href = 'https://github.com' className = 'AboutMe__links AboutMe__links_type_example'>Адаптивный сайт <img src = { arrow } alt = 'стрелка'></img></a>
                    <a href = 'https://github.com' className = 'AboutMe__links AboutMe__links_type_example'>Одностраничное приложение <img src = { arrow } alt = 'стрелка'></img></a>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;