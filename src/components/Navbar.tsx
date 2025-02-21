import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-secondary border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">RecipeShare</span>
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center px-8">
            <div className="max-w-lg w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-secondary-light text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Search recipes..."
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/create"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-primary hover:bg-primary-dark transition duration-150"
            >
              Share Recipe
            </Link>
            <Link to="/profile" className="p-2 rounded-full text-gray-300 hover:text-primary transition duration-150">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;