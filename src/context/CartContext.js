import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api/cart";

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await axios.get(`${API_URL}`);
            setCart(response.data);
        } catch (error) {
            console.error(" Error fetching cart:", error);
        }
    };

   
    const addToCart = (product) => {
        setCart((prevCart) => {

            const existingItem = prevCart.find(item => item._id === product._id);

            if (existingItem) {
                
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    const updateCartItem = async (id, quantity) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cart/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity })
            });

            if (!response.ok) throw new Error(" Failed to update cart item");

            const updatedItem = await response.json();

            setCart(prevCart => prevCart.map(item =>
                item._id === id ? updatedItem : item
            ));
        } catch (error) {
            console.error(" Error updating cart:", error);
        }
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item._id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateCartItem, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
