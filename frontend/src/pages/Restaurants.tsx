import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';
import RestaurantCard from '../components/RestaurantCard';
import Loader from '../components/Loader';
import { Search } from 'lucide-react';

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  location: string;
  image: string;
  rating: number;
  description: string;
}

const Restaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await api.get('/restaurants');
        setRestaurants(response.data);
      } catch (err) {
        setError('Failed to load restaurants');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <Loader />;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-6 sm:py-8 lg:py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-3 sm:mb-4">
            Discover <span className="bg-gradient-to-r from-orange-luxury via-orange-bright to-gold-accent bg-clip-text text-transparent">Restaurants</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">Find your next favorite meal from SoSo Foods</p>

          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto group"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-orange-luxury w-6 h-6 transition-colors" />
            <input
              type="text"
              placeholder="Search restaurants or cuisine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-gray-800 border-2 border-orange-luxury/20 hover:border-orange-luxury/50 focus:border-orange-luxury focus:shadow-glow-sm rounded-full text-gray-100 placeholder-gray-500 focus:outline-none transition-all duration-300 text-lg shadow-md"
            />
          </motion.div>
        </motion.div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-orange-luxury/30 rounded-2xl text-gray-300 mb-8 shadow-luxury"
          >
            {error}
          </motion.div>
        )}

        {filteredRestaurants.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-block p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-orange-luxury/20 shadow-luxury">
              <p className="text-gray-400 text-xl">No restaurants found. Try a different search.</p>
            </div>
          </motion.div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <motion.div key={restaurant._id} layout>
                <RestaurantCard
                  id={restaurant._id}
                  name={restaurant.name}
                  cuisine={restaurant.cuisine}
                  location={restaurant.location}
                  image={restaurant.image}
                  rating={restaurant.rating}
                  description={restaurant.description}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Restaurants;
