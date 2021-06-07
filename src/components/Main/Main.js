import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Tech from '../Tech/Tech';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

function Main(){
    return (
<>
        <Header 
        modificator = 'Logo_type_form-profile'></Header>
        <Promo />
        <NavTab />
        <AboutProject />
        <Tech />
        <AboutMe />
        <Footer />
</>
    )
}

export default Main;
