import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';

import 'office-ui-fabric-core/dist/css/fabric.css';
import './Home.css';

const Products = [
  {
    category: 'news & media',
    name: 'Reuters Connecdt',
    description:
      'A faster, more intelligent way of sourcing the news content you need through a single destination.',
  },
  {
    category: 'legal',
    name: 'Westlaw',
    description:
      'Access trusted content and editorial enhancements that can help you work smarter, more efficiently, and with total confidence.',
  },
  {
    category: 'tax & accounting',
    name: 'ONESOURCE',
    description:
      'Tax technology that helps businesses stay compliant, avoid penalties and audits, and save time.',
  },
  {
    category: 'tax & accounting',
    name: 'Checkpoint',
    description:
      'Innovative online research suite of editorial and source materials, productivity tools, learning, and news.',
  },
  {
    category: 'legal',
    name: 'CLEAR',
    description:
      'Locate and connect complex pieces of data in a single dashboard to identify critical connections.',
  },
  {
    category: 'tax & accounting',
    name: 'ONESOURCE Global Trade',
    description: 'Automate and streamline your trade compliance processes.',
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <h2>Products Dashboard</h2>
      {/* <div className='dashboard'>
        {Products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div> */}
      <div class='ms-Grid' dir='ltr'>
        <div class='ms-Grid-row'>
          <div class='ms-Grid-col ms-sm12 ms-md4 ms-lg4'>
            <ProductCard {...Products[0]} />
          </div>
          <div class='ms-Grid-col ms-sm12 ms-md4 ms-lg4'>
            <ProductCard {...Products[1]} />
          </div>
          <div class='ms-Grid-col ms-sm12 ms-md4 ms-lg4'>
            <ProductCard {...Products[2]} />
          </div>
        </div>
        <div class='ms-Grid-row'>
          <div class='ms-Grid-col ms-sm12 ms-md4 ms-lg4'>
            <ProductCard {...Products[3]} />
          </div>
          <div class='ms-Grid-col ms-sm12 ms-md4 ms-lg4'>
            <ProductCard {...Products[4]} />
          </div>
          <div class='ms-Grid-col ms-sm12 ms-md4 ms-lg4'>
            <ProductCard {...Products[5]} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
