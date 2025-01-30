
import React from 'react';
import { Link } from 'react-router-dom'; 

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">GadgetGear</Link> {/* Link to Home */}
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/products">Products</Link> {/* Link to Products page */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to About page */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to Contact page */}
        </li>
        <li>
          <Link to="/cart">Cart</Link> {/* Link to Contact page */}
        </li>
        <li>
          <Link to="/login">login</Link> {/* Link to Contact page */}
        </li>
        <li>
          <Link to="/signup">signup</Link> {/* Link to Contact page */}
        </li>
        <li><Link to="/view-orders">View Orders</Link></li>

      </ul>
    </nav>
  );
};

export default Navigation;
