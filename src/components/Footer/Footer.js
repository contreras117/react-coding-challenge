import React from 'react';

import logo from '../../assets/logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logo} alt='logo' height='24' width='24' />
      THOMSON REUTERS
    </footer>
  );
};

export default Footer;
