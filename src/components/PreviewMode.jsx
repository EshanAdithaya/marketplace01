import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import Account from './Account';
import NotFound from './NotFound';
import PreviewWrapper from './PreviewWrapper';

const PreviewMode = () => {
  return (
    <PreviewWrapper>
      <div className="min-h-screen bg-white">
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
    </PreviewWrapper>
  );
};

export default PreviewMode;