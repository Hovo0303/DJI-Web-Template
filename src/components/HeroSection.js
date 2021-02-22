import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection (){
    return (
        <div className='hero-container'>
            <video src='/videos/video4.mp4' autoPlay loop muted />
        </div>
    )
}
export default HeroSection