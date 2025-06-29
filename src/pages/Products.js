import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaShoppingCart, FaFilter } from 'react-icons/fa';
import { products, categories, getProductsByCategory, searchProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const category = searchParams.get('category');
  const search = searchParams.get('search');

  useEffect(() => {
    let result = products;

    // Apply category filter
    if (category) {
      result = getProductsByCategory(category);
      setSelectedCategory(category);
    } else if (selectedCategory !== 'all') {
      result = getProductsByCategory(selectedCategory);
    }

    // Apply search filter
    if (search) {
      result = searchProducts(search);
      setSearchQuery(search);
    } else if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(result);
  }, [category, search, selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSearchParams({ category: categoryId });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery });
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Local Products in Alaminos</h1>
        
        {/* Filters and Search */}
        <div className="filters-section">
          <div className="search-filter">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">
                <FaFilter />
              </button>
            </form>
          </div>

          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="sort-filter">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Sort by Rating</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing {filteredProducts.length} products</p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
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
                  <div className="product-actions">
                    <Link to={`/product/${product.id}`} className="view-details-btn">
                      View Details
                    </Link>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria.</p>
            <button 
              className="cta-button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSearchParams({});
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products; 