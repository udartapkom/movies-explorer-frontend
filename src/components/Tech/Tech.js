import React from 'react';

function Tech(){
    return(
        <section className = 'Tech'>
            <div className = 'Tech__content'>
                <h3 id = 'Tech' className = 'Tech__title'>Технологии</h3>
                <div className = 'Tech__texts'>
                    <h2 className = 'Tech__subtitle'>7 технологий</h2>
                    <p className = 'Tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>
            <ul className = 'Tech__list'>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>HTML</p></li>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>CSS</p></li>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>JS</p></li>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>React</p></li>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>Git</p></li>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>Express.js</p></li>
                <li className = 'Tech__list-element'><p className = 'Tech__paragrapf'>mongoDB</p></li>
            </ul>
            </div>

        </section>
    )
}
export default Tech;