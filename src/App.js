import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './components/Cart'; // Import Cart component
import ProductCard from './components/ProductCard';
import { AuthProvider } from './context/AuthContext';
import LoginSignup from './components/LoginSignup';
import Checkout from './components/Checkout';
import ViewOrders from './components/ViewOrders';

import './styles/index.css'; // Global Styles
import './styles/navigation.css'; // Navigation Styles
import './styles/home.css'; // Home Styles
import './styles/products.css'; // Products Styles

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navigation />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />
              <Route path="/signup" element={<LoginSignup />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/view-orders" element={<ViewOrders />} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
