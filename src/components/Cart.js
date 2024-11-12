import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: 'Classic White T-Shirt',
      price: 29.99,
      quantity: 1,
      size: 'M',
      color: 'White',
      image: 'https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Leather Crossbody Bag',
      price: 89.99,
      quantity: 1,
      color: 'Brown',
      image: 'https://images.pexels.com/photos/2090785/pexels-photo-2090785.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>

      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
        <div className="lg:col-span-7">
          {cartItems.map((item) => (
            <div key={item.id} className="flex py-6 border-b">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                    </h3>
                    <p className="ml-4">${item.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.color} {item.size && `/ Size ${item.size}`}
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between">
                  <div className="flex items-center space-x-3">
                    <button className="p-1 border rounded-md hover:bg-gray-50">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button className="p-1 border rounded-md hover:bg-gray-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
          <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Subtotal</p>
              <p className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Shipping</p>
              <p className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <p className="text-base font-medium text-gray-900">Total</p>
              <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block w-full rounded-full bg-black px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;