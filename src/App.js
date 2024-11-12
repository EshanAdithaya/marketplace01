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
import PreviewMode from './components/PreviewMode';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Preview Mode Routes */}
        <Route path="/preview/*" element={<PreviewMode />} />

        {/* Regular Routes */}
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <main className="container mx-auto px-4">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <PreviewMode />
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
          }
        />
      </Routes>
    </Router>
  );
};

export default App;