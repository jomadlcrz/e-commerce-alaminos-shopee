import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Alaminos Shopee</h1>
          <p>Your local marketplace for Alaminos, Pangasinan. Discover local products, support local businesses, and connect with your community.</p>
          <Link to="/products" className="cta-button">
            Shop Local Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Local Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-rating">
                    <FaStar style={{ color: '#ffd700' }} />
                    <span>{product.rating} ({product.reviews} reviews)</span>
                  </div>
                  <p className="product-price">₱{product.price}</p>
                  <p className="product-location">
                    <FaMapMarkerAlt /> {product.location}
                  </p>
                  <p className="product-seller">by {product.seller}</p>
                  <Link to={`/product/${product.id}`} className="add-to-cart-btn">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="cta-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="local-highlights">
        <div className="container">
          <h2 className="section-title">Why Shop Local in Alaminos?</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🏝️</div>
              <h3>Hundred Islands</h3>
              <p>Support local businesses around the famous Hundred Islands tourist destination.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🌾</div>
              <h3>Fresh Local Produce</h3>
              <p>Get fresh vegetables, rice, and seafood directly from Alaminos farms and fishermen.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🛍️</div>
              <h3>Local Handicrafts</h3>
              <p>Discover unique bamboo crafts, coconut shell products, and traditional souvenirs.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚗</div>
              <h3>Convenient Delivery</h3>
              <p>Fast local delivery within Alaminos City and nearby areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <Link to="/products?category=food" className="category-card">
              <div className="category-icon">🍽️</div>
              <h3>Local Food</h3>
              <p>Traditional dishes and local specialties</p>
            </Link>
            <Link to="/products?category=handicrafts" className="category-card">
              <div className="category-icon">🎨</div>
              <h3>Handicrafts</h3>
              <p>Local artisan products and souvenirs</p>
            </Link>
            <Link to="/products?category=agriculture" className="category-card">
              <div className="category-icon">🌱</div>
              <h3>Agriculture</h3>
              <p>Fresh produce and farm products</p>
            </Link>
            <Link to="/products?category=services" className="category-card">
              <div className="category-icon">🚗</div>
              <h3>Services</h3>
              <p>Local services and tours</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 