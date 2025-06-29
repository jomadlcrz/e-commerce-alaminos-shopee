import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        <div className="error-page">
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products" className="cta-button">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    // You could add a success message here
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>

        <div className="product-detail-container">
          <div className="product-images">
            <img 
              src={product.image} 
              alt={product.name} 
              className="main-product-image"
            />
          </div>

          <div className="product-info-detail">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating">
              <FaStar style={{ color: '#ffd700' }} />
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="product-price">
              <span className="price">₱{product.price}</span>
            </div>

            <div className="product-location">
              <FaMapMarkerAlt />
              <span>{product.location}</span>
            </div>

            <div className="product-seller">
              <strong>Seller:</strong> {product.seller}
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-availability">
              <span className={`status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {product.inStock && (
              <div className="add-to-cart-section">
                <div className="quantity-selector">
                  <label>Quantity:</label>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  className="add-to-cart-btn large"
                  onClick={handleAddToCart}
                >
                  <FaShoppingCart /> Add to Cart - ₱{product.price * quantity}
                </button>
              </div>
            )}

            <div className="product-meta">
              <div className="meta-item">
                <strong>Category:</strong> {product.category}
              </div>
              <div className="meta-item">
                <strong>Product ID:</strong> #{product.id}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="related-products">
          <h2>You might also like</h2>
          <div className="products-grid">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="product-card">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">{relatedProduct.name}</h3>
                    <p className="product-price">₱{relatedProduct.price}</p>
                    <Link to={`/product/${relatedProduct.id}`} className="add-to-cart-btn">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 