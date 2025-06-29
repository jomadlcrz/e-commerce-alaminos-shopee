# Alaminos Shopee - Local Marketplace

A local e-commerce platform specifically designed for Alaminos, Pangasinan, Philippines. This is a Shopee-inspired marketplace that connects local buyers and sellers within the Alaminos community.

## 🌟 Features

### For Buyers
- **Local Product Discovery**: Browse products from local sellers in Alaminos
- **Category Filtering**: Shop by categories (Local Food, Handicrafts, Agriculture, Services)
- **Search Functionality**: Find specific products or sellers
- **Shopping Cart**: Add items and manage quantities
- **Product Details**: View detailed product information with ratings and reviews
- **Local Delivery**: Fast delivery within Alaminos City (₱50 delivery fee)

### For Sellers
- **Local Market Access**: Reach customers specifically in Alaminos
- **Product Management**: List and manage local products
- **Local Branding**: Highlight Alaminos-specific products and services

### Key Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, Shopee-inspired interface with local Alaminos branding
- **User Authentication**: Login and registration system
- **Profile Management**: User profiles with local barangay selection
- **Shopping Cart**: Persistent cart with localStorage
- **Local Categories**: 
  - Local Food (Longganisa, Bangus, Bagoong, etc.)
  - Handicrafts (Bamboo crafts, Coconut shell products)
  - Agriculture (Fresh produce, Organic rice)
  - Services (Island tours, Motorcycle taxi)

## 🏝️ Alaminos-Specific Content

### Local Products Featured
- **Alaminos Longganisa** - Traditional local sausage
- **Fresh Bangus** - From Alaminos Bay
- **Hundred Islands Souvenir T-Shirts** - Tourist merchandise
- **Bamboo Baskets** - From Bani, Alaminos
- **Organic Rice** - From Alos, Alaminos
- **Island Hopping Tours** - Hundred Islands experiences
- **Local Handicrafts** - Coconut shell products and traditional crafts

### Local Delivery
- Delivery within Alaminos City: ₱50
- Delivery time: 1-2 hours
- Cash on delivery available
- Support for all 39 barangays of Alaminos

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alaminos-shopee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Footer with local info
├── pages/              # Main application pages
│   ├── Home.js         # Landing page with featured products
│   ├── Products.js     # Product listing with filters
│   ├── ProductDetail.js # Individual product page
│   ├── Cart.js         # Shopping cart
│   ├── Login.js        # User authentication
│   ├── Register.js     # User registration
│   └── Profile.js      # User profile management
├── context/            # React Context for state management
│   └── CartContext.js  # Shopping cart state
├── data/               # Static data and utilities
│   └── products.js     # Product data and search functions
├── App.js              # Main application component
├── App.css             # Global styles
└── index.js            # Application entry point
```

## 🎨 Design Features

### Color Scheme
- **Primary**: #ee4d2d (Shopee Orange)
- **Secondary**: #ff6b35 (Orange gradient)
- **Accent**: #ffd700 (Gold for highlights)
- **Background**: #f5f5f5 (Light gray)

### Local Branding
- Alaminos-specific product categories
- Hundred Islands imagery and references
- Local barangay selection in user profiles
- Alaminos City contact information

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly elements
- **Mobile**: Mobile-first design with simplified navigation

## 🔧 Technologies Used

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **CSS3** - Styling with modern features
- **LocalStorage** - Client-side data persistence

## 🌍 Local Focus

This platform is specifically designed for the Alaminos, Pangasinan community:

### Geographic Scope
- **Primary Market**: Alaminos City, Pangasinan
- **Service Area**: All 39 barangays of Alaminos
- **Local Delivery**: Within city limits

### Cultural Integration
- Local product categories (Longganisa, Bangus, etc.)
- Hundred Islands tourism integration
- Local business support
- Community-focused features

## 🚀 Future Enhancements

### Planned Features
- **Seller Dashboard**: For local businesses to manage listings
- **Real-time Chat**: Direct communication between buyers and sellers
- **Payment Integration**: Local payment methods
- **Order Tracking**: Real-time delivery tracking
- **Reviews & Ratings**: Community feedback system
- **Local Events**: Integration with Alaminos events and festivals

### Technical Improvements
- **Backend Integration**: Full API implementation
- **Database**: Product and user data persistence
- **Authentication**: Secure user management
- **Image Upload**: Product image management
- **Search Optimization**: Advanced search and filtering

## 🤝 Contributing

This project is designed specifically for the Alaminos community. Contributions should focus on:

1. **Local Content**: Adding more Alaminos-specific products and services
2. **User Experience**: Improving the local shopping experience
3. **Community Features**: Features that strengthen local commerce
4. **Localization**: Tagalog language support and local cultural elements

## 📄 License

This project is created for educational and community purposes. It's inspired by Shopee but designed specifically for local Alaminos commerce.

## 📞 Contact

For questions about this local marketplace:
- **Location**: Alaminos City, Pangasinan, Philippines
- **Email**: info@alaminosshopee.com
- **Phone**: +63 999 123 4567

---

**Built with ❤️ for the Alaminos Community**
