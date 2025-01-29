import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if there's a token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setUser({ token: res.data.token, ...res.data.user });
        navigate('/products');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      await axios.post('http://localhost:5000/signup', { name, email, password });
      await login(email, password);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
