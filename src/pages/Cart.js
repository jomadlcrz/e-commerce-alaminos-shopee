import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <FaShoppingCart className="empty-cart-icon" />
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="cta-button">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // This would typically redirect to a checkout page or payment gateway
    alert('Checkout functionality would be implemented here for Alaminos local delivery!');
  };

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/products" className="back-link">
            <FaArrowLeft /> Continue Shopping
          </Link>
          <h1>Shopping Cart</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-seller">by {item.seller}</p>
                  <p className="item-location">{item.location}</p>
                  <p className="item-price">₱{item.price}</p>
                </div>

                <div className="item-quantity">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <p>₱{item.price * item.quantity}</p>
                </div>

                <button 
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-item">
              <span>Subtotal ({cartItems.length} items):</span>
              <span>₱{getCartTotal()}</span>
            </div>
            
            <div className="summary-item">
              <span>Local Delivery Fee:</span>
              <span>₱50</span>
            </div>
            
            <div className="summary-item total">
              <span>Total:</span>
              <span>₱{getCartTotal() + 50}</span>
            </div>

            <div className="delivery-info">
              <h4>Local Delivery Information</h4>
              <p>• Delivery within Alaminos City: ₱50</p>
              <p>• Delivery time: 1-2 hours</p>
              <p>• Cash on delivery available</p>
            </div>

            <div className="cart-actions">
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
              
              <button 
                className="clear-cart-btn"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 