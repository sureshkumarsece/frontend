import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000/api/cart";

    useEffect(() => {
        fetchCart();
    }, []);

    // Fetch Cart from Backend
    const fetchCart = async () => {
        try {
            const response = await axios.get(`${API_URL}`);
            setCart(response.data);
        } catch (error) {
            console.error("❌ Error fetching cart:", error);
        }
    };

    // Add Item to Cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Check if the item already exists in the cart
            const existingItem = prevCart.find(item => item._id === product._id);

            if (existingItem) {
                // If it exists, update the quantity
                return prevCart.map(item =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If it doesn't exist, add the new product with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Update Item Quantity
    const updateCartItem = async (id, quantity) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cart/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity })
            });

            if (!response.ok) throw new Error("❌ Failed to update cart item");

            const updatedItem = await response.json();

            setCart(prevCart => prevCart.map(item =>
                item._id === id ? updatedItem : item
            ));
        } catch (error) {
            console.error("❌ Error updating cart:", error);
        }
    };

    // Remove Item from Cart
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
