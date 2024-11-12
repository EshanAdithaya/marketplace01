import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Eye, EyeOff } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const isPreviewMode = location.pathname.startsWith('/preview');

  const categories = [
    "New Arrivals",
    "Best Sellers",
    "Clothing",
    "Accessories",
    "Sale"
  ];

  const togglePreviewMode = () => {
    const currentPath = location.pathname;
    const newPath = isPreviewMode 
      ? currentPath.replace('/preview', '')
      : `/preview${currentPath}`;
    window.location.href = newPath;
  };

  const getAdjustedLink = (path) => {
    return isPreviewMode ? `/preview${path}` : path;
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={getAdjustedLink('/')} className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Shanthur</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div key={category} className="relative group">
                <button className="text-gray-500 group-hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  {category}
                </button>
                <div className="absolute left-0 hidden group-hover:block w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Category 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Category 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sub Category 3
                  </a>
                </div>
              </div>
            ))}
          </nav>

          {/* Search, Cart, Account, and Preview Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link to={getAdjustedLink('/cart')} className="p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to={getAdjustedLink('/account')} className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={togglePreviewMode}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              {isPreviewMode ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span className="text-sm">Exit Preview</span>
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Preview</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {category}
              </a>
            ))}
            <div className="mt-4 px-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Mobile Preview Mode Toggle */}
            <button
              onClick={togglePreviewMode}
              className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              {isPreviewMode ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span className="text-sm">Exit Preview</span>
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span className="text-sm">Preview</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Preview Mode Contact Banner */}
      {isPreviewMode && (
        <div className="bg-black text-white text-xs py-1 text-center">
          Contact: eshangunathilaka10@gmail.com
        </div>
      )}
    </header>
  );
};

export default Header;