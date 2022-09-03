import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (<>
      <div className='header'>
        <h2>JUAN CASAÑAS</h2>
        <nav>
          <input type="checkbox" id='check' />
          <label htmlFor="check" className='toggle-btn'>
            <FontAwesomeIcon icon={faBars} className='toggle-menu-icon'/>
          </label>
          <ul id='header-list' className='header-list'>
            <li>Inicio</li>
            <li>Sobre mí</li>
            <li>Mi trabajo</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header