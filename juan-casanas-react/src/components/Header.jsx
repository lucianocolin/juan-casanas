import React from 'react';
import '../css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (<>
      <div className='header'>
        <h2>J C</h2>
        <nav>
          <input type="checkbox" id='check' />
          <label htmlFor="check" className='toggle-btn'>
            <FontAwesomeIcon icon={faBars} className='toggle-menu-icon'/>
          </label>
          <ul id='header-list' className='header-list'>
            <li>
              <NavLink to='/' className={({ isActive })=> isActive ? 'active header-link' : 'header-link'}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to='/sobre-mi' className='header-link'>
                Sobre Mí
              </NavLink>
            </li>
            <li>Mi trabajo</li>
            <li>Contacto</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header