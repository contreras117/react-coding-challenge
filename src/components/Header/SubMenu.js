import React from 'react';
import { mergeStyleSets } from '@fluentui/react';
import { Link } from 'react-router-dom';

const SubMenu = ({ menu, sections }) => {
  return (
    <div className={styles.container}>
      {sections.map((section) => (
        <div key={section.title} className={styles.section}>
          <h3 className={styles.h3}>{section.title}</h3>
          <div>
            <ul className={styles.ul}>
              {section.items.map((item) => (
                <li key={item.name} className={styles.li}>
                  <Link
                    className={styles.a}
                    to={item.url}
                    state={{ selectedMenu: menu }}
                  >
                    <h4 className={styles.h4}>{item.name}</h4>
                    <p className={styles.p}>{item.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = mergeStyleSets({
  container: {
    padding: '3rem 0',
    display: 'flex',
  },
  section: {
    width: '18.1875rem',
    padding: '0.75rem 1.5rem 0 1.5rem',
    borderRight: '.0625rem solid #d0d0d0',
    boxSizing: 'border-box',
    ':last-child': {
      border: 0,
    },
  },
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  li: {
    padding: '0.75rem 0',
    ':hover h4': {
      textDecoration: 'underline',
    },
  },
  h3: {
    color: '#fa6400',
    margin: '0 0 1.125rem 0',
    fontSize: '1.16667rem',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  h4: {
    fontWeight: 700,
    margin: 0,
  },
  p: {
    fontSize: '14px',
    margin: 0,
  },
});

export default SubMenu;
