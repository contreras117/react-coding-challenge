import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { mergeStyleSets } from '@fluentui/react';

const EmptyPage = ({ title }) => {
  return (
    <>
      <Header />
      <div className={styles.partialBackground}></div>
      <div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <Footer />
    </>
  );
};

const styles = mergeStyleSets({
  title: {
    fontWeight: 'normal',
    fontSize: '1.75rem',
    maxWidth: '75rem',
    margin: '2.5rem auto 1.5rem auto',
    padding: '0 1.125rem',
    boxSizing: 'content-box',
  },

  partialBackground: {
    width: '100%',
    height: '18rem',
    backgroundColor: '#f4f4f4',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});

export default EmptyPage;
