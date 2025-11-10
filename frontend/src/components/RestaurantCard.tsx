import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface RestaurantCardProps {
  id: string;
  name: string;
  cuisine: string;
  location: string;
  image: string;
  rating: number;
  description: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  cuisine,
  location,
  image,
  rating,
  description,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60';

  return (
    <Link to={`/restaurants/${id}`}>
      <motion.div
        whileHover={{ y: -12, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden cursor-pointer border-2 border-orange-luxury/30 hover:border-orange-luxury hover:shadow-luxury transition-all duration-500 group"
      >
        <div className="relative h-56 overflow-hidden bg-gray-900">
          <img
            src={imageError ? fallbackImage : image}
            alt={name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-gradient-to-br from-orange-luxury to-orange-bright text-white px-3 py-2 rounded-xl flex items-center gap-2 shadow-luxury group-hover:scale-110 transition-transform duration-300">
            <Star className="w-5 h-5 fill-white text-white animate-pulse" />
            <span className="text-sm font-bold">{rating}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-100 mb-2 truncate group-hover:text-orange-luxury transition-all duration-300 group-hover:translate-x-1">{name}</h3>
          <div className="flex items-center justify-between mb-3">
            <span className="text-orange-luxury text-sm font-semibold px-3 py-1 bg-orange-luxury/20 rounded-full group-hover:bg-orange-luxury/30 group-hover:shadow-glow-sm transition-all duration-300">{cuisine}</span>
            <span className="text-gray-400 text-sm group-hover:text-orange-bright transition-colors duration-300">{location}</span>
          </div>
          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default RestaurantCard;
