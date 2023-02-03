import React from 'react';
import { Callout, DelayedRender, mergeStyleSets } from '@fluentui/react';
import { useBoolean, useId } from '@fluentui/react-hooks';
import {
  ChevronDownSmallIcon,
  ChevronUpSmallIcon,
} from '@fluentui/react-icons-mdl2';
import SubMenu from './SubMenu';

const NavItem = ({ text, targetId, subMenu }) => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] =
    useBoolean(false);
  const buttonId = useId('menu-item');

  return (
    <>
      <button
        type='button'
        id={buttonId}
        onClick={toggleIsCalloutVisible}
        className={styles.button}
        data-clicked={isCalloutVisible}
      >
        <span className={styles.span}>{text}</span>
        {isCalloutVisible ? (
          <ChevronUpSmallIcon className={styles.icon} />
        ) : (
          <ChevronDownSmallIcon className={styles.icon} />
        )}
      </button>
      {isCalloutVisible && (
        <Callout
          className={styles.callout}
          target={`#${targetId}`}
          onDismiss={toggleIsCalloutVisible}
          role='alert'
          isBeakVisible={false}
        >
          <DelayedRender>
            <SubMenu sections={subMenu} />
          </DelayedRender>
        </Callout>
      )}
    </>
  );
};

const styles = mergeStyleSets({
  button: {
    display: 'flex',
    background: 'white',
    border: 0,
    height: '4.875rem',
    padding: '0 0.75rem',
    alignItems: 'center',
    fontWeight: 700,
    cursor: 'pointer',
    ':hover, &[data-clicked="true"]': {
      borderBottom: '0.3125rem solid #fa6400',
      borderLeft: 0,
      borderRight: 0,
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      paddingTop: '0.3125rem',
    },
  },
  buttonChecked: {
    borderBottom: '0.3125rem solid #fa6400',
  },
  span: {
    marginRight: '0.375rem',
  },
  icon: {
    color: '#fa6400',
    fontSize: '0.625rem',
    padding: '7px',
  },
  callout: {
    background: 'white',
  },
});

export default NavItem;
