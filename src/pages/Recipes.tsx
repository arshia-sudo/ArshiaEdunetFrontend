import React from 'react';
import { Clock, User } from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      description: "A traditional Italian pizza with fresh basil, mozzarella, and tomatoes",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Chef Maria",
      time: "30 mins",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Thai Green Curry",
      description: "Authentic Thai curry with coconut milk, vegetables, and aromatic herbs",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Chef John",
      time: "45 mins",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Chocolate Lava Cake",
      description: "Decadent chocolate dessert with a gooey center",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      author: "Chef Sarah",
      time: "25 mins",
      difficulty: "Medium"
    }
    // Add more recipes as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Recipes</h1>
        <div className="flex space-x-4">
          <select className="rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            <option>All Categories</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Desserts</option>
          </select>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500">
            <option>Sort by: Latest</option>
            <option>Most Popular</option>
            <option>Cooking Time</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{recipe.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{recipe.time}</span>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;