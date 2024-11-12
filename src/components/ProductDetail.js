import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Minus, Plus, Heart } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Sample product data
  const product = {
    id,
    name: 'Classic White T-Shirt',
    price: 29.99,
    description: 'A comfortable and versatile classic white t-shirt made from premium cotton.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    rating: 4.5,
    reviews: 128,
    image: 'https://images.pexels.com/photos/991509/pexels-photo-991509.jpeg?auto=compress&cs=tinysrgb&w=600',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="aspect-w-1 aspect-h-1 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>
          </div>

          {/* Rating */}
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <Star
                  key={rating}
                  className={`h-5 w-5 ${
                    rating < product.rating
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="ml-3 text-sm text-gray-500">
              {product.reviews} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-900">{product.description}</p>
          </div>

          <form className="mt-6">
            {/* Size selector */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Size</h2>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="border rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color selector */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Color</h2>
              <div className="grid grid-cols-4 gap-2 mt-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="border rounded-md py-2 px-3 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900">Quantity</h2>
              <div className="flex items-center mt-2 space-x-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border rounded-md hover:bg-gray-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border rounded-md hover:bg-gray-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to cart and wishlist buttons */}
            <div className="mt-8 flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="p-3 border rounded-full hover:bg-gray-50"
              >
                <Heart className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;