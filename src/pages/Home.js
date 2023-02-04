import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import { mergeStyleSets } from '@fluentui/react';

const Products = [
  {
    category: 'news & media',
    name: 'Reuters Connect',
    url: '/reuters-connect',
    description:
      'A faster, more intelligent way of sourcing the news content you need through a single destination.',
  },
  {
    category: 'legal',
    name: 'Westlaw',
    url: '/westlaw',
    description:
      'Access trusted content and editorial enhancements that can help you work smarter, more efficiently, and with total confidence.',
  },
  {
    category: 'tax & accounting',
    name: 'ONESOURCE',
    url: '/onesource',
    description:
      'Tax technology that helps businesses stay compliant, avoid penalties and audits, and save time.',
  },
  {
    category: 'tax & accounting',
    name: 'Checkpoint',
    url: '/checkpoint',
    description:
      'Innovative online research suite of editorial and source materials, productivity tools, learning, and news.',
  },
  {
    category: 'legal',
    name: 'CLEAR',
    url: '/clear',
    description:
      'Locate and connect complex pieces of data in a single dashboard to identify critical connections.',
  },
  {
    category: 'tax & accounting',
    name: 'ONESOURCE Global Trade',
    url: 'onesource-global-trade',
    description: 'Automate and streamline your trade compliance processes.',
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.partialBackground}></div>
      <div>
        <h2 className={styles.title}>
          Products <b className={styles.bold}>Dashboard</b>
        </h2>
        <div className={styles.grid}>
          {Products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = mergeStyleSets({
  grid: {
    maxWidth: '75rem',
    margin: '0 auto 3rem auto',
    padding: '0 1.125rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, [col-start] 1fr)',
    gap: '2.25rem',
    boxSizing: 'content-box',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, [col-start] 1fr)',
    },
  },
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
  bold: {
    fontWeight: 900,
  },
});

export default Home;
