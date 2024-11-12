import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
                <img src="/api/placeholder/176/256" alt="Fashion item 1" className="h-full w-full object-cover object-center" />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="/api/placeholder/176/256" alt="Fashion item 2" className="h-full w-full object-cover object-center" />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="/api/placeholder/176/256" alt="Fashion item 3" className="h-full w-full object-cover object-center" />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="/api/placeholder/176/256" alt="Fashion item 4" className="h-full w-full object-cover object-center" />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img src="/api/placeholder/176/256" alt="Fashion item 5" className="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;