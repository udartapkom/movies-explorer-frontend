import React from 'react';

function AboutProject(){
    return(
        <section className = 'AboutProject'>
            <div className = 'AboutProject__content'>
                <h3 id = 'AboutProject' className = 'AboutProject__title'>О проекте</h3>
                <ul className = 'AboutProject__lists'>
                    <li className = 'AboutProject__stages'>
                        <ul className = 'AboutProject__stage'>
                            <li className = 'AboutProject__subtitle'>Дипломный проект включал 5 этапов</li>
                            <li className = 'AboutProject__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</li>
                        </ul>
                    </li>
                    <li>
                        <ul className = 'AboutProject__stage'>
                            <li className = 'AboutProject__subtitle'>На выполнение диплома ушло 5 недель</li>
                            <li className = 'AboutProject__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</li>
                        </ul>
                    </li>
                </ul>
                <div className = 'AboutProject__stageLine'>
                    <div className = 'AboutProject__stageLine_green'>
                        <p className = 'AboutProject__text AboutProject__text_color_black'>1 неделя</p>
                        <p className = 'AboutProject__stageLine-subtitle'>Back-end</p>
                    </div>
                    <div className = 'AboutProject__stageLine_grey'>
                        <p className = 'AboutProject__text AboutProject__text_color_white AboutProject__text_width_max'>4 недели</p>
                        <p className = 'AboutProject__stageLine-subtitle'>Front-end</p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}
export default AboutProject;