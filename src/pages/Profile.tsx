import React from 'react';
import { Settings, BookOpen, Heart, Clock } from 'lucide-react';

const Profile = () => {
  const userRecipes = [
    {
      id: 1,
      title: "Homemade Pizza",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Chocolate Cake",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "2024-03-10"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-secondary rounded-lg shadow-md p-6 mb-8 border border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                alt="Profile"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">Sarah Johnson</h1>
                <p className="text-gray-400">Food enthusiast & home chef</p>
              </div>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-gray-300 bg-secondary-light hover:bg-secondary transition duration-150">
              <Settings className="h-5 w-5 mr-2" />
              Edit Profile
            </button>
          </div>
          
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-gray-800 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-sm text-gray-400">Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1.2k</div>
              <div className="text-sm text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">48</div>
              <div className="text-sm text-gray-400">Following</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-800 mb-8">
          <nav className="-mb-px flex space-x-8">
            <a href="#" className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              My Recipes
            </a>
            <a href="#" className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              Favorites
            </a>
            <a href="#" className="border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Recent Activity
            </a>
          </nav>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition duration-150">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">{recipe.title}</h3>
                <div className="text-sm text-gray-400">
                  Published on {recipe.date}
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-gray-400 hover:text-primary transition duration-150">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-primary transition duration-150">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;