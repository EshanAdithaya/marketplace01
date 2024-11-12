import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    orders: [
      {
        id: '#12345',
        date: '2024-03-15',
        total: 129.99,
        status: 'Delivered'
      },
      {
        id: '#12346',
        date: '2024-03-10',
        total: 89.99,
        status: 'Processing'
      }
    ],
    wishlist: [
      {
        id: 1,
        name: 'Classic White T-Shirt',
        price: 29.99,
        image: '/api/placeholder/100/100'
      }
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Profile Information</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button className="rounded-full bg-black text-white px-6 py-2 text-sm font-semibold">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div>
            <h3 className="text-lg font-medium">Order History</h3>
            <div className="mt-4 space-y-4">
              {user.orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total}</p>
                      <p className="text-sm text-gray-500">{order.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'wishlist':
        return (
          <div>
            <h3 className="text-lg font-medium">Wishlist</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {user.wishlist.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div>
            <h3 className="text-lg font-medium">Account Settings</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive order updates and promotions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                </label>
              </div>
              <div>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center space-x-2 w-full px-4 py-2 text-left rounded-lg ${
                activeTab === 'profile' ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center space-x-2 w-full px-4 py-2 text-left rounded-lg ${
                activeTab === 'orders' ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Orders</span>
            </button>
            <button
              onClick={() => setActiveTab('wishlist')}
              className={`flex items-center space-x-2 w-full px-4 py-2 text-left rounded-lg ${
                activeTab === 'wishlist' ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center space-x-2 w-full px-4 py-2 text-left rounded-lg ${
                activeTab === 'settings' ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </button>
            <button
              className="flex items-center space-x-2 w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 rounded-lg"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;