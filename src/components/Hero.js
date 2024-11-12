import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  console.log('Hero component rendered');
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Style meets comfort in every piece
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Discover our latest collection of premium fashion items, crafted with quality and designed for your lifestyle.
            </p>
          </div>
          <div className="mt-10">
            <div className="mt-10 flex gap-x-4">
              <Link
                to="/products"
                className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="https://img.freepik.com/free-photo/two-beautiful-girls-making-shopping-looking-phone-mall_176420-5771.jpg?t=st=1731424451~exp=1731428051~hmac=4fa59b0e2c738479897ff8f7cbdc840e88dde6c3f0c1982404e90972d0e74246&w=740" alt="Fashion item 1" className="h-full w-full object-cover object-center" />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion item 2" className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion item 3" className="h-full w-full object-cover object-center" />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion item 4" className="h-full w-full object-cover object-center" />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Fashion item 5" className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;