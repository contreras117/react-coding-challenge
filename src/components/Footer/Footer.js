import React from 'react';
import { Link } from 'react-router-dom';
import { mergeStyleSets } from '@fluentui/react';

import logo from '../../assets/whiteLogo.png';

const Footer = () => {
  return (
    <footer className={styles.footer} state={{ selectedMenu: '' }}>
      <Link to='/'>
        <img src={logo} alt='Thomson Reuters logo' />
      </Link>
    </footer>
  );
};

const styles = mergeStyleSets({
  footer: {
    backgroundColor: '#262626',
    width: '100%',
    color: 'white',
    marginTop: 'auto',
  },
});

export default Footer;
