import React from 'react';
import './About.css';
import { Button } from './Button';

function About() {
    return (
        <div className='about'>
            <div className='container'>
              <div className='row'>
                  <div className='col-6'>
                    <h1>Small But Mighty</h1>
                    <p>Thanks to intuitive and advanced features packed in a portable frame, DJI Mini 2 provides complete freedom wherever and however you want to create. Whether you’re shooting at a deserted beach or capturing the details of a fun family reunion, Mini 2 can handle it all.</p>
                    <div className='about-btn'>
                    <Button buttonStyle='btn--outline'>Read More</Button>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='about-img'>
                        <img src='/images/nkar9.gif' alt='img'/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}
export default About



