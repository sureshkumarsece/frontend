import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/cart.css';

const Cart = () => {
    const { cart, updateCartItem, removeFromCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    
    const navigate = useNavigate();
    const exchangeRate = 82; 

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity <= 0) return;
        updateCartItem(id, newQuantity);
    };

    const handleBuy = () => {
        
        navigate('/checkout');
    };

    const handleBuyAll = () => {
        
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const quantity = cart.reduce((acc, item) => acc + item.quantity, 0);

        
        setTotalPrice(total * exchangeRate); 
        setTotalQuantity(quantity);

      
        setShowPopup(true);
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleContinueShopping = () => {
        navigate('/products');
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <button className="continue-shopping" onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <button className="buy-all" onClick={handleBuyAll}>
                        Buy All
                    </button>
                    {cart.map((item) => (
                        <div key={item._id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>₹{(item.price * exchangeRate).toFixed(2)}</p> {/* Convert item price to INR */}
                                <div className="cart-controls">
                                    <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <button className="remove" onClick={() => handleRemove(item._id)}>
                                Remove
                            </button>
                            <button className="buy" onClick={handleBuy}> {/* Directly go to checkout */}
                                Buy
                            </button>
                        </div>
                    ))}
                </>
            )}

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Order Summary</h3>
                        <p><strong>Total Quantity:</strong> {totalQuantity}</p>
                        <p><strong>Total Price:</strong> ₹{totalPrice.toFixed(2)}</p> {/* Display total price in INR */}
                        <div className="popup-buttons">
                            <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
                            <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
