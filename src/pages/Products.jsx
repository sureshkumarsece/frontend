import React, { useState, useContext } from 'react';
import '../styles/products.css';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

import product1Image from '../assets/product1.png';
import product2Image from '../assets/product2.png';
import product3Image from '../assets/product3.png';
import product4Image from '../assets/product4.png';
import product5Image from '../assets/product5.png';
import product6Image from '../assets/product6.png';
import product7Image from '../assets/product7.png';
import product8Image from '../assets/product8.png';
import product9Image from '../assets/product9.png';
import product10Image from '../assets/product10.png';
import product11Image from '../assets/product11.png';
import product12Image from '../assets/product12.png';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const products = [
    { _id: 1, image: product1Image, title: 'Air Buds', price: 500, description: 'Wireless earbuds with noise cancellation' },
    { _id: 2, image: product2Image, title: 'Refrigerator', price: 60000, description: 'Double-door refrigerator with frost-free technology' },
    { _id: 3, image: product3Image, title: 'Mobile', price: 15600, description: 'Smartphone with 128GB storage and 48MP camera' },
    { _id: 4, image: product4Image, title: 'Laptop', price: 76000, description: 'Thin and light laptop with 16GB RAM and 512GB SSD' },
    { _id: 5, image: product5Image, title: 'Washing Machine', price: 90000, description: 'Front-load washing machine with 10kg capacity' },
    { _id: 6, image: product6Image, title: 'TV', price: 30000, description: '55-inch 4K Smart TV with HDR10' },
    { _id: 7, image: product7Image, title: 'Camera', price: 56000, description: 'Mirrorless camera with 24MP sensor and 4K video' },
    { _id: 8, image: product8Image, title: 'Thermometer', price: 500, description: 'Digital infrared thermometer for accurate measurement' },
    { _id: 9, image: product9Image, title: 'Hair Dryer', price: 300, description: '2000W hair dryer with ionic technology' },
    { _id: 10, image: product10Image, title: 'Trimmer', price: 600, description: 'Cordless trimmer for easy trimming' },
    { _id: 11, image: product11Image, title: 'Arduino', price: 1000, description: 'Arduino Uno microcontroller board' },
    { _id: 12, image: product12Image, title: 'Mouse', price: 400, description: 'Wireless mouse with ergonomic design' },
  ];

  const filteredProducts = products
    .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return 0;
    });

  const handleAddToCart = (product) => {
    addToCart(product);
    setPopupMessage(`${product.title} added to cart successfully!`);
    setTimeout(() => {
      setPopupMessage('');
    }, 3000);
  };

  return (
    <div className="container">
      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
      
      <div className="search-sort-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="sort-dropdown" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <button className="sort-btn">Sort by Price ▼</button>
          {dropdownOpen && (
            <div className="sort-options">
              <button onClick={() => { setSortOrder('lowToHigh'); setDropdownOpen(false); }}>Lowest to Highest</button>
              <button onClick={() => { setSortOrder('highToLow'); setDropdownOpen(false); }}>Highest to Lowest</button>
            </div>
          )}
        </div>
      </div>

      <div className="products-container">
        {filteredProducts.map(product => (
          <div key={product._id} className="product-card">
            <ProductCard product={{ ...product, price: `${product.price}` }} />
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
