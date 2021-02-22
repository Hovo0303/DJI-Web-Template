import React from 'react';
import './Menu.css';
import { Button } from './Button';

 const Menu = () => {
     return (
         <div className='about'>
              <div className='container'>
               <div className='row'>
                 <div className='col-6'>
                     <div className='about-img'>
                     <img src='/images/nkar10.gif' alt='img'/>
                     </div>
                 </div>
                 <div className='col-6' p-padding>
                     <h1>Pack Light, Fly Free</h1>
                    <p>Just how light is DJI Mini 2? At less than 249 g, it weighs about as much as an apple and fits in the palm of your hand. Compact and convenient, Mini 2 is your ideal travel companion, transforming how you capture your favorite memories. [1]</p>
                     <div className='about-btn'>
                     <Button buttonStyle='btn--outline'>Read More</Button>
                     </div>
                 </div>
               </div>
             </div>
            
         </div>
     )
 }

export default Menu
