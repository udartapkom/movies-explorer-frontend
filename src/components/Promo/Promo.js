import React from 'react';
import promoLogo from '../../images/promoLogo.svg';

function Promo(){
    return(
<section className = 'Promo'>
    <img className = 'Promo__logo' src = { promoLogo } alt = 'Промо'></img>
    <h1 className = 'Promo__title'>Учебный проект студента факультета Веб-разработки.</h1> 
</section>
    )
}
export default Promo;