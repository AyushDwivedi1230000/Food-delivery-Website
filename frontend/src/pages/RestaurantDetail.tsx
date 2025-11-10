import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, MapPin, Clock } from 'lucide-react';
import api from '../services/api';
import Button from '../components/Button';
import Loader from '../components/Loader';
import { getUniqueFoodImage, getCaloriesForFood, getRatingForFood } from '../utils/foodImages';

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  calories?: number;
  rating?: number;
}

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  location: string;
  image: string;
  rating: number;
  description: string;
  menu: MenuItem[];
}

const RestaurantDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60';

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await api.get(`/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (err) {
        setError('Failed to load restaurant details');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchRestaurant();
    }
  }, [id]);

  if (isLoading) return <Loader />;

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error || 'Restaurant not found'}</p>
          <Button onClick={() => navigate('/restaurants')}>Back to Restaurants</Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ x: -5, scale: 1.05 }}
          onClick={() => navigate('/restaurants')}
          className="flex items-center gap-2 sm:gap-3 text-orange-luxury hover:text-orange-bright mb-6 sm:mb-8 transition-all duration-300 font-semibold text-base sm:text-lg group"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          Back to Restaurants
        </motion.button>

        <motion.div initial={{ y: 20 }} animate={{ y: 0 }} className="space-y-6 sm:space-y-8">
          <div className="relative h-64 sm:h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-luxury border-2 border-orange-luxury/20">
            <img 
              src={imageError ? fallbackImage : restaurant.image} 
              alt={restaurant.name} 
              onError={() => setImageError(true)}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            
            {/* Rating Badge - Modern Design */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-gradient-to-br from-orange-luxury to-orange-bright text-white px-5 sm:px-6 py-3 sm:py-4 rounded-2xl flex items-center gap-2 shadow-luxury backdrop-blur-sm">
              <Star className="w-6 sm:w-7 h-6 sm:h-7 fill-white text-white animate-pulse" />
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl leading-none">{restaurant.rating}</span>
                <span className="text-xs opacity-90">(1K reviews)</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl"
              >
                {restaurant.name}
              </motion.h1>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 sm:gap-4 text-white"
              >
                <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-orange-luxury to-orange-bright backdrop-blur-md rounded-xl font-semibold text-base sm:text-lg shadow-luxury">
                  {restaurant.cuisine}
                </span>
                <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white/95 backdrop-blur-md rounded-xl flex items-center gap-2 text-gray-900 text-sm sm:text-base font-semibold shadow-lg">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-luxury" />
                  {restaurant.location}
                </span>
                <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-black/50 backdrop-blur-md rounded-xl text-sm sm:text-base font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  30-40 mins
                </span>
              </motion.div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border-2 border-orange-luxury/30 p-6 sm:p-10 shadow-luxury">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12">{restaurant.description}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-luxury to-orange-bright bg-clip-text text-transparent mb-2">Our Menu</h2>
                <p className="text-gray-400 text-sm">Delicious dishes made with love</p>
              </div>
              <div className="px-5 py-3 bg-orange-luxury/20 rounded-2xl border-2 border-orange-luxury/40 shadow-glow-sm">
                <span className="text-orange-luxury font-bold text-lg">{restaurant.menu.length} Dishes</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {restaurant.menu.map((item, index) => {
                // Use unique image system with index to ensure different images
                const itemImage = item.image || getUniqueFoodImage(item.name, index);
                const calories = item.calories || getCaloriesForFood(item.name);
                const itemRating = item.rating || getRatingForFood();
                
                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, y: -8 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border-2 border-orange-luxury/30 hover:border-orange-luxury transition-all duration-500 shadow-lg hover:shadow-luxury group cursor-pointer"
                  >
                    {/* Food Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-950">
                      <img 
                        src={itemImage} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
                        onError={(e) => {
                          // Fallback to a default food image if the current one fails to load
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Calories Badge */}
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1">
                        🔥 {calories} Cal
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-3 left-3 bg-orange-luxury/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        {itemRating}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-100 pr-2 group-hover:text-orange-bright transition-colors line-clamp-2">{item.name}</h3>
                        <span className="text-orange-luxury font-bold text-xl whitespace-nowrap">₹{item.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">{item.description}</p>
                      
                      {/* Add to Cart Button */}
                      <button className="w-full py-3 bg-gradient-to-r from-orange-deep via-orange-luxury to-orange-bright text-white rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-luxury hover:scale-105 flex items-center justify-center gap-2">
                        <span className="text-xl">+</span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RestaurantDetail;
