import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    doorNo: '',
    areaName: '',
    landmark: '',
    gstNumber: '',
    locationType: 'Home',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.doorNo) newErrors.doorNo = 'Door No is required';
    if (!formData.areaName) newErrors.areaName = 'Area Name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
    }
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setLoading(true);

    const token = localStorage.getItem('token'); 

    if (!token) {
      alert('You must be logged in to place an order.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://gadgetgear-production.up.railway.app/api/orders', formData, {
        headers: { Authorization: `Bearer ${token}` }, 
      });

      setSuccessMessage('Order placed successfully!');
      setTimeout(() => navigate('/order-success'), 2000);
    } catch (error) {
      console.error('Error placing order', error);
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('token');
        navigate('/login'); 
      } else {
        alert('Failed to place order');
      }
    }

    setLoading(false);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="checkout-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p className="error-message">{errors.phone}</p>}

        <input type="text" name="doorNo" placeholder="Door No" value={formData.doorNo} onChange={handleChange} />
        {errors.doorNo && <p className="error-message">{errors.doorNo}</p>}

        <input type="text" name="areaName" placeholder="Area Name" value={formData.areaName} onChange={handleChange} />
        {errors.areaName && <p className="error-message">{errors.areaName}</p>}

        <input type="text" name="landmark" placeholder="Landmark (optional)" value={formData.landmark} onChange={handleChange} />

        <input type="text" name="gstNumber" placeholder="GST Number (if applicable)" value={formData.gstNumber} onChange={handleChange} />

        <select name="locationType" value={formData.locationType} onChange={handleChange}>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>

        <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange}></textarea>
        {errors.address && <p className="error-message">{errors.address}</p>}

        <button className="place-order-button" onClick={handlePlaceOrder} disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
