import React from 'react';
import { ForwardIcon } from '@fluentui/react-icons-mdl2';

import './ProductCard.css';

const ProductCard = ({ category, name, description }) => {
  return (
    <div className='card'>
      <h4 className='card-category'>{category}</h4>
      <h3 className='card-name'>{name}</h3>
      <p className='card-description'>{description}</p>
      <p className='card-details'>
        See Details <ForwardIcon className='card-details-icon' />
      </p>
    </div>
  );
};

export default ProductCard;
