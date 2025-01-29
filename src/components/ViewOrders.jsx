import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './orders.css';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token being sent:", token); // Debugging
        const res = await axios.get('http://localhost:5000/api/orders/my-orders', {
          headers: { Authorization: `Bearer ${token}` }, // Ensure "Bearer " prefix
        });
        console.log("Fetched Orders:", res.data); // Debugging
        setOrders(res.data);
      } catch (error) {
        console.error('Error fetching orders:', error.response?.data || error.message);
      }
      setLoading(false);
    };
  
    fetchOrders();
  }, []);
  

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {loading ? <p>Loading...</p> : orders.length === 0 ? <p>No orders found.</p> : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Door No:</strong> {order.doorNo}</p>
              <p><strong>Area:</strong> {order.areaName}</p>
              <p><strong>Landmark:</strong> {order.landmark || 'N/A'}</p>
              <p><strong>Location Type:</strong> {order.locationType}</p>
              <p><strong>Order Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => navigate('/products')} className="back-button">Back to Shopping</button>
    </div>
  );
};

export default ViewOrders;
