import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Alaminos Shopee</h3>
          <p>Your local marketplace for Alaminos, Pangasinan. Connect with local sellers and buyers in your community.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <li><Link to="/products?category=food">Local Food</Link></li>
            <li><Link to="/products?category=handicrafts">Handicrafts</Link></li>
            <li><Link to="/products?category=agriculture">Agriculture</Link></li>
            <li><Link to="/products?category=services">Services</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> Alaminos City, Pangasinan, Philippines</p>
          <p><FaPhone /> +63 999 123 4567</p>
          <p><FaEnvelope /> info@alaminosshopee.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2024 Alaminos Shopee. All rights reserved. | Serving Alaminos, Pangasinan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 