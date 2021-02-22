import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import NewHeroSection from '../NewHeroSection';
import ImgSection from '../ImgSection';
import Footer from '../Footer';


function Home () {
    return(
        <>
        <HeroSection />
        <Cards />
        <NewHeroSection /> 
        <ImgSection /> 
        <Footer />
        </>
    );
}
export default Home;