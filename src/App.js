import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Account from './components/Account';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Add debug message */}
        <div className="bg-yellow-100 p-4 text-center">
          Debug: App Component Loaded
        </div>
        
        <Header />
        
        <main className="container mx-auto px-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Products />
                </>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;