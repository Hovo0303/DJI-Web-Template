import React from 'react';
import './ImgSection.css';
import ImgCardItem from './ImgCardItem';


function ImgSection() {
    return (
        <div className='img-cards'>
             <h1>Show off just how epic your view is.</h1> 
            <div className='imgcards__container'>
                <div className='imgcards__wrapper'>
                    <ul className='imgcards__items'>
                        <ImgCardItem 
                        src="images/nkar7.gif"
                        text="With a max battery life of 31 minutes, DJI Mini 2 grants more than enough time to compose the perfect shot. [2]"
                        label='Adventure'
                        path='/services'
                        />
                         <ImgCardItem 
                        src="images/nkar5.gif"
                        text="Mini 2 can resist 29-38kph winds and take off at a max altitude of 4,000 meters, so your footage is stable even when flying along a windy coastline or high above an alpine forest."
                        label='Luxury'
                        path='/services'
                        />
                          <ImgCardItem 
                        src="images/nkar8.gif"
                        text="Mini 2 supports up to 10 km of HD video transmission and has excellent anti-interference capabilities, giving you the ability to fly farther and see clearer. [3]"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ImgSection;