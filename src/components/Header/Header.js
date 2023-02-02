import React from 'react';

import logo from '../../assets/logo.png';

import './Header.css';
import NavItem from './NavItem';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <img src={logo} alt='Thomson Reuters logo' height='24' width='24' />
        THOMSON REUTERS
      </div>
      <div className='header__nav'>
        <ul>
          <li>
            <NavItem text='Solutions' />
          </li>
          <li>
            <NavItem text='Admin' />
          </li>
          <li>
            <NavItem text='Account' />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
