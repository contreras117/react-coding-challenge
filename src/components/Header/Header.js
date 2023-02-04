import React from 'react';
import { Link } from 'react-router-dom';
import { mergeStyleSets } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';

import NavItem from './NavItem';

import logo from '../../assets/blackLogo.png';

const solutionsMenu = [
  {
    title: 'Industries',
    items: [
      {
        name: 'Legal',
        description:
          'Leverage unparalleled legal content, expertise, and technology',
        url: '/legal',
      },
      {
        name: 'News & Media',
        description: 'Find essential resources for broadcasters and publishers',
        url: '/news-media',
      },
      {
        name: 'Tax & Accounting',
        description:
          'Explore our tax and accounting technology, guidance, and expertise',
        url: '/tax-accounting',
      },
      {
        name: 'Risk & Fraud',
        description:
          'Discover solutions built for corporations and government agencies',
        url: '/risk-fraud',
      },
    ],
  },
  {
    title: 'Organizations',
    items: [
      {
        name: 'Corporations',
        description: 'Let us help you solve your toughest business challenges',
        url: '/corporations',
      },
      {
        name: 'Government',
        description:
          'Government professionals trust us to help them make informed decisions',
        url: '/government',
      },
      {
        name: 'Profesional services firms',
        description:
          'Access global tax, legal, and risk management resources for today’s professional services firms',
        url: '/profesional-services-firms',
      },
    ],
  },
  {
    title: 'Partnerships',
    items: [
      {
        name: 'The power of partnership',
        description:
          'Expand your audience and your capabilities by joining our partner program',
        url: '/power-partnership',
      },
    ],
  },
];

const accountMenu = [
  {
    title: 'Account',
    items: [
      {
        name: 'Profile',
        description: 'Account profile',
        url: '/profile',
      },
    ],
  },
];

const adminMenu = [
  {
    title: 'Settings',
    items: [
      {
        name: 'Settings',
        description: 'Config settings',
        url: '/settings',
      },
    ],
  },
];

const Header = () => {
  const targetId = useId('menu-target');
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/' state={{ selectedMenu: '' }}>
          <img src={logo} alt='Thomson Reuters logo' />
        </Link>
        <ul className={styles.ul}>
          <li>
            <NavItem
              text='Solutions'
              subMenu={solutionsMenu}
              targetId={targetId}
            />
          </li>
          <li>
            <NavItem text='Admin' subMenu={adminMenu} targetId={targetId} />
          </li>
          <li>
            <NavItem text='Account' subMenu={accountMenu} targetId={targetId} />
          </li>
          <li id={targetId}></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = mergeStyleSets({
  nav: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: '0 1.125rem',
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },

  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderTop: '.25rem solid #fa6400',
    borderBottom: '.0625rem solid #d0d0d0',
    backgroundColor: 'white',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  img: {},
});

export default Header;
