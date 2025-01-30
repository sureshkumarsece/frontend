import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Discover the Future of Technology</h1>
          <p className="hero-subtitle">Explore the latest gadgets and innovations at Gadget Gear</p>
          {/* Use Link to navigate to Products Page */}
          <Link to="/products">
            <button className="cta-button">Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="product-highlights">
        <h2 className="section-title">Explore Our Categories</h2>
        <div className="categories-container">
          <div className="category-card">
            <Link to="/products/smartwatches">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLXNabLIcszrgDOI7lhPmUQkMrO4u8HLkqA&s" 
                alt="Smartwatches" 
                className="category-image" 
              />
              <h3 className="category-title">Smartwatches</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/products/headphones">
              <img 
                src="https://www.sennheiser.com/globalassets/digizuite/45735-en-hd_490_pro_product_shot_in_use_axis_audio_69.jpg/SennheiserFullWidth" 
                alt="Headphones" 
                className="category-image" 
              />
              <h3 className="category-title">Headphones</h3>
            </Link>
          </div>
          <div className="category-card">
            <Link to="/products/laptops">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWlvZecWiUleGf5gmQGybdb5uJH39rl56mQ&s" 
                alt="Laptops" 
                className="category-image" 
              />
              <h3 className="category-title">Laptops</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          Gadget Gear is dedicated to bringing you the latest in technology. We curate the best gadgets, ensuring
          top-quality products and exceptional customer service.
        </p>
        {/* Use Link to navigate to About page */}
        <Link to="/about">
          <button className="cta-button">Learn More</button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">© 2025 Gadget Gear. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
