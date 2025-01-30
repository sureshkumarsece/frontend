import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/about.css';
import aboutImage from '../assets/aboutimage.png'; // Import an image

const About = () => {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <img src={aboutImage} alt="About Gadget Gear" className="hero-image" />
          <div className="hero-text">
            <h1 className="hero-title">About Gadget Gear</h1>
            <p className="hero-subtitle">
              We are dedicated to bringing you the latest in technology, offering top-quality gadgets and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          At Gadget Gear, our mission is to empower individuals with the best tech products. We are committed to providing a platform that curates the best in technology, ensuring that our customers receive only the highest-quality gadgets that improve their everyday lives.
        </p>
      </section>

      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3 className="value-title">Innovation</h3>
            <p className="value-description">We stay ahead of the curve, always offering the latest products and trends.</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">Quality</h3>
            <p className="value-description">Only the best for our customers, ensuring products that are durable and high-performing.</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">Customer-Centric</h3>
            <p className="value-description">Your satisfaction is our priority, and we ensure exceptional service at every step.</p>
          </div>
          <div className="value-card">
            <h3 className="value-title">Sustainability</h3>
            <p className="value-description">We are committed to eco-friendly practices in sourcing and packaging our products.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-text">Have any questions or want to learn more? Get in touch with us, and we’ll be happy to help!</p>
        <Link to="/contact" className="contact-link">
          <button className="email-button">Email Us</button>
        </Link>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2025 Gadget Gear. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
