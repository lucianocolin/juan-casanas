import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons-container'>
        <a href='https://twitter.com/JuanCasanas1' target='blank'><FontAwesomeIcon 
        icon={faTwitter} 
        className='footer-tw-icon' /></a>

        <a href='https://www.facebook.com/juan.casanas.39' target='blank'><FontAwesomeIcon 
        icon={faFacebook}
        className='footer-fb-icon' /></a>

        <a href='https://www.instagram.com/juanfcasanas/' target='blank'><FontAwesomeIcon 
        icon={faInstagram}
        className='footer-ig-icon' /></a>
      </div>
      <div className='footer-rights'>
        <p>Todos los derechos reservados ©</p>
      </div>
    </div>
  )
}

export default Footer