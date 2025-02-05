import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, ChevronDown, Star, ArrowRight } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 299.99,
      rating: 4.8,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
      discount: 15
    },
    {
      id: 2,
      name: 'Smart 4K OLED TV',
      price: 1499.99,
      rating: 4.9,
      reviews: 856,
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=600',
      discount: 20
    },
    {
      id: 3,
      name: 'Professional Camera Kit',
      price: 2499.99,
      rating: 4.7,
      reviews: 543,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600',
      discount: 10
    },
    {
      id: 4,
      name: 'Designer Watch Collection',
      price: 599.99,
      rating: 4.6,
      reviews: 921,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600',
      discount: 25
    }
  ];

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Beauty',
    'Sports',
    'Books',
    'Automotive',
    'Health'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          Free worldwide shipping on orders over $100 | 30-day returns
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-12">
              <h1 className="text-2xl font-bold">BDMART</h1>
              
              {/* Desktop Categories */}
              <nav className="hidden lg:flex space-x-8">
                {categories.slice(0, 5).map((category) => (
                  <div key={category} className="relative group">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-black">
                      <span>{category}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </nav>
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center text-gray-600 hover:text-black">
                <User className="h-6 w-6" />
              </button>
              <button className="hidden md:flex items-center text-gray-600 hover:text-black">
                <Heart className="h-6 w-6" />
              </button>
              <button className="flex items-center text-gray-600 hover:text-black">
                <ShoppingCart className="h-6 w-6" />
                <span className="ml-2 text-sm font-medium">Cart (0)</span>
              </button>
              <button className="md:hidden">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
          alt="Hero"
          className="w-full h-[500px] object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">Discover Premium Quality</h1>
              <p className="text-xl mb-8">Shop the world's finest selection of luxury products with exclusive deals and offers.</p>
              <button className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-gray-600 hover:text-black flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md">
                    -{product.discount}%
                  </div>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold">${product.price}</span>
                    {product.discount > 0 && (
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ${(product.price * (1 + product.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="relative h-40 group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={`https://source.unsplash.com/featured/?${category.toLowerCase()}`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, exclusive offers, and premium deals delivered right to your inbox.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-black focus:outline-none"
            />
            <button className="bg-black px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About BDMART</h3>
              <p className="text-gray-600">
                Premium marketplace for luxury products and exclusive items from around the world.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Contact Us</a></li>
                <li><a href="#" className="hover:text-black">Shipping Information</a></li>
                <li><a href="#" className="hover:text-black">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-black">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">New Arrivals</a></li>
                <li><a href="#" className="hover:text-black">Best Sellers</a></li>
                <li><a href="#" className="hover:text-black">Deals & Promotions</a></li>
                <li><a href="#" className="hover:text-black">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black">Instagram</a></li>
                <li><a href="#" className="hover:text-black">Facebook</a></li>
                <li><a href="#" className="hover:text-black">Twitter</a></li>
                <li><a href="#" className="hover:text-black">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 BDMART. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;