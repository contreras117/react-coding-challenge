import React from 'react';
import { ForwardIcon } from '@fluentui/react-icons-mdl2';
import { mergeStyleSets } from '@fluentui/react';

const ProductCard = ({ category, name, description, url }) => {
  return (
    <a href={url} className={styles.card}>
      <h4 className={styles.category}>{category}</h4>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.details}>
        See Details <ForwardIcon className={styles.icon} />
      </p>
    </a>
  );
};

const styles = mergeStyleSets({
  card: {
    backgroundColor: 'white',
    textDecoration: 'none',
    color: 'inherit',
    padding: '2rem',
    border: '.0625rem solid #d0d0d0',
    minHeight: '18rem',
    boxSizing: 'border-box',
    gridColumn: 'col-start / span 12',
    ':hover': {
      boxShadow: '0 0.125rem 0.5rem #afafaf',
    },
    '@media (min-width: 768px)': {
      gridColumn: 'unset',
    },
  },
  category: {
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 900,
    letterSpacing: '0.18em',
    margin: '0 0 6px',
  },

  name: {
    margin: '0 0 12px',
    fontSize: '21px',
    fontWeight: 900,
    lineHeight: '30px',
  },

  description: {
    margin: '0 0 12px',
  },

  details: {
    margin: 0,
    display: 'inline-block',
    ':hover': {
      textDecoration: 'underline',
    },
  },

  icon: {
    color: '#fa6400',
    marginLeft: '0.5rem',
    width: '1rem',
  },
});

export default ProductCard;
