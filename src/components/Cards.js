import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import About from './About'
import './About.css'
import Menu from './Menu'


function Cards() {
    return (
        <div className='cards'>
            <h1>There are many places you visit once in a lifetime. Bring DJI Mini 2 for a unique perspective, and make the most of your travels.</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/nkar12.gif"
                        text="Preferences or read our Cookie Policy to learn more."
                        label='Adventure'
                        path='/services'
                        />
                         <CardItem 
                        src="images/nkar13.gif"
                        text="It may be small, but this drone packs a ton of power."
                        label='Luxury'
                        path='/products'
                        />
                    </ul>
                    <About/>
                    <Menu/> 
                </div>
            </div>
        </div>
    );
}
export default Cards;