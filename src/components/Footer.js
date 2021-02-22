import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' className='footer-input' placeholder='Your email addrees'></input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Categories</h2>
            <Link to='/sign-up'>Consumer</Link>
            <Link to='/'>Professional</Link>
            <Link to='/'>Enterprise</Link>
            <Link to='/'>Components</Link>
            <Link to='/'>DJI Care</Link>
            <Link to='/'>Osmo Shield</Link>
            <Link to='/'>DJI Care Refresh</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Where to Buy</h2>
            <Link to='/'>DJI Online Store</Link>
            <Link to='/'>Flagship Stores</Link>
            <Link to='/'>DJI-Operated Stores</Link>
            <Link to='/'>Retail Stores</Link>
            <Link to='/'>Enterprise Retailers</Link>
            <Link to='/'>Agricultural Drone Dealer</Link>
            <Link to='/'>Pro Retailers</Link>
            <Link to='/'>DJI Store App</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Fly Safe</h2>
            <Link to='/'>Fly Safe</Link>
            <Link to='/'>DJI Flying Tips</Link><br/>
            <h2>Support</h2>
            <Link to='/'>Product Support</Link>
            <Link to='/'>Help Center</Link>
            <Link to='/'>After-Sales Service</Link>
            <Link to='/'>Download Center</Link>
            <Link to='/'>Product Support</Link>
            <Link to='/'>Security and Privacy</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Explore</h2>
            <Link to='/'>Newsroom</Link>
            <Link to='/'>Events</Link>
            <Link to='/'>Buying Guides</Link>
            <Link to='/'>STEAM Education</Link>
            <Link to='/'>Mini Drones</Link>
            <Link to='/'>DJI Camera Drones</Link>
            <Link to='/'>DJI Affiliate Program</Link>

          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
          
        </div>
      </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>WebWork</Link>
                </div>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'> <i className='fab fa-facebook-f'></i></Link>
                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'> <i className='fab fa-instagram'></i></Link>
                    <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'> <i className='fab fa-twitter'></i></Link>
                    <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='Linkedin'> <i className='fab fa-linkedin'></i></Link>
                    <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'> <i className='fab fa-youtube'></i></Link>
                </div>
            </div>
        </section>
    </div>
   );
}
export default Footer;