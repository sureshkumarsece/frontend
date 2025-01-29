import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { image, title, price, description } = product;

  return (
    <div className="product-card">
      <img src={image} alt={`Image of ${title}`} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="product-price">₹{price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;