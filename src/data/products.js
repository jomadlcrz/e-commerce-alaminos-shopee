export const products = [
  {
    id: 1,
    name: "Alaminos Longganisa",
    price: 150,
    category: "food",
    location: "Alaminos City Center",
    description: "Traditional Alaminos longganisa made with local pork and spices. Perfect for breakfast!",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop",
    seller: "Alaminos Meat Shop",
    rating: 4.8,
    reviews: 45,
    inStock: true
  },
  {
    id: 2,
    name: "Hundred Islands Souvenir T-Shirt",
    price: 250,
    category: "handicrafts",
    location: "Hundred Islands Tourist Center",
    description: "Commemorative t-shirt featuring the beautiful Hundred Islands of Alaminos.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    seller: "Island Treasures",
    rating: 4.5,
    reviews: 32,
    inStock: true
  },
  {
    id: 3,
    name: "Fresh Bangus (Milkfish)",
    price: 180,
    category: "food",
    location: "Alaminos Fish Market",
    description: "Freshly caught bangus from Alaminos Bay. Perfect for sinigang or grilled dishes.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    seller: "Alaminos Fresh Seafood",
    rating: 4.9,
    reviews: 67,
    inStock: true
  },
  {
    id: 4,
    name: "Bamboo Baskets",
    price: 350,
    category: "handicrafts",
    location: "Bani, Alaminos",
    description: "Handcrafted bamboo baskets made by local artisans. Perfect for storage or decoration.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    seller: "Bani Bamboo Crafts",
    rating: 4.7,
    reviews: 28,
    inStock: true
  },
  {
    id: 5,
    name: "Organic Rice",
    price: 45,
    category: "agriculture",
    location: "Alos, Alaminos",
    description: "Freshly harvested organic rice from Alaminos farms. 1kg pack.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
    seller: "Alaminos Organic Farm",
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: 6,
    name: "Island Hopping Tour",
    price: 800,
    category: "services",
    location: "Hundred Islands",
    description: "Guided tour of the Hundred Islands. Includes boat ride and snorkeling equipment.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    seller: "Hundred Islands Tours",
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: 7,
    name: "Bagoong Balayan",
    price: 120,
    category: "food",
    location: "Alaminos Market",
    description: "Traditional bagoong balayan made from fermented fish. Perfect for kare-kare and other Filipino dishes.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    seller: "Alaminos Traditional Foods",
    rating: 4.4,
    reviews: 23,
    inStock: true
  },
  {
    id: 8,
    name: "Coconut Shell Crafts",
    price: 200,
    category: "handicrafts",
    location: "Alaminos City",
    description: "Beautiful coconut shell crafts including bowls, spoons, and decorative items.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop",
    seller: "Coconut Artisans",
    rating: 4.3,
    reviews: 19,
    inStock: true
  },
  {
    id: 9,
    name: "Fresh Vegetables Bundle",
    price: 150,
    category: "agriculture",
    location: "Alaminos Farm Market",
    description: "Fresh vegetables bundle including tomatoes, onions, garlic, and local greens.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    seller: "Alaminos Vegetable Coop",
    rating: 4.7,
    reviews: 42,
    inStock: true
  },
  {
    id: 10,
    name: "Motorcycle Taxi Service",
    price: 50,
    category: "services",
    location: "Alaminos City",
    description: "Reliable motorcycle taxi service within Alaminos City. Safe and affordable transportation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    seller: "Alaminos Transport Services",
    rating: 4.5,
    reviews: 78,
    inStock: true
  },
  {
    id: 11,
    name: "Dried Fish (Tuyo)",
    price: 180,
    category: "food",
    location: "Alaminos Fish Market",
    description: "Sun-dried fish (tuyo) from Alaminos Bay. Perfect with rice and tomatoes.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    seller: "Alaminos Dried Seafood",
    rating: 4.6,
    reviews: 34,
    inStock: true
  },
  {
    id: 12,
    name: "Banana Chips",
    price: 80,
    category: "food",
    location: "Alaminos City",
    description: "Crispy banana chips made from local saba bananas. Perfect snack!",
    image: "https://images.unsplash.com/photo-1603046891744-76e6300df9d9?w=400&h=300&fit=crop",
    seller: "Alaminos Snack House",
    rating: 4.8,
    reviews: 56,
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'food', name: 'Local Food' },
  { id: 'handicrafts', name: 'Handicrafts' },
  { id: 'agriculture', name: 'Agriculture' },
  { id: 'services', name: 'Services' }
];

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.seller.toLowerCase().includes(lowercaseQuery)
  );
}; 