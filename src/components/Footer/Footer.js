import { mergeStyleSets } from '@fluentui/react';
import React from 'react';

import logo from '../../assets/whiteLogo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href='/'>
        <img src={logo} alt='Thomson Reuters logo' />
      </a>
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
