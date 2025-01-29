import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/productdetail.css';

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="product-detail-container">
      <img src={product.image} alt={`Image of ${product.title}`} className="product-detail-image" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="product-detail-price">${product.price}</p>
      <h2>Key Features</h2>
      <ul>
        {product.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2>Specifications</h2>
      <ul>
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;