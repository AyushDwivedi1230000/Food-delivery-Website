import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ArrowRight, Star, Truck, Shield, Phone, ChefHat, MapPin, Users } from 'lucide-react';

const Home: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {isAuthenticated ? (
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-3 animate-slide-up">
                Welcome back, <span className="text-orange-luxury hover:text-orange-bright transition-colors">{ user?.name.split(' ')[0]}</span>!
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 animate-fade-in">Your favorite meals are just a click away</p>
              <p className="text-sm sm:text-base text-gray-400 mt-2 flex items-center justify-center sm:justify-start gap-2 group">
                <Phone className="w-4 h-4 group-hover:text-orange-luxury group-hover:rotate-12 transition-all" />
                <a href="tel:+918459872072" className="hover:text-orange-luxury transition-colors">+918459872072</a>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border-2 border-orange-luxury/30 hover:border-orange-luxury hover:shadow-luxury transition-all duration-500"
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-luxury to-orange-bright bg-clip-text text-transparent mb-4">Your Profile</h2>
                <div className="space-y-3 text-gray-300">
                  <p className="hover:text-orange-bright transition-colors">
                    <span className="text-gray-400">Name:</span> {user?.name}
                  </p>
                  <p className="hover:text-orange-bright transition-colors">
                    <span className="text-gray-400">Email:</span> {user?.email}
                  </p>
                  <p className="hover:text-orange-bright transition-colors">
                    <span className="text-gray-400">Address:</span> {user?.address || 'Not added yet'}
                  </p>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border-2 border-orange-luxury/30 hover:border-orange-luxury hover:shadow-luxury transition-all duration-500">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-luxury to-orange-bright bg-clip-text text-transparent mb-4">Your Recent Orders</h2>
                <div className="text-gray-400">
                  <p className="mb-4">No orders yet. Start exploring restaurants now!</p>
                  <Link to="/restaurants">
                    <Button className="flex items-center gap-2 group">
                      Browse Restaurants
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
            {/* Left Column - Content */}
            <div className="space-y-10 py-8">
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-orange-luxury/30 hover:border-orange-luxury shadow-sm hover:shadow-luxury transition-all group"
              >
                <MapPin className="w-4 h-4 text-orange-luxury group-hover:scale-110 group-hover:rotate-12 transition-all" />
                <span className="text-sm font-semibold text-orange-luxury group-hover:text-orange-bright transition-colors">Mumbai, India</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">Discover</span>
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-orange-luxury via-orange-bright to-gold-accent bg-clip-text text-transparent">
                      Restaurants
                    </span>
                  </span>
                  <br />
                  <span className="text-gray-400">that deliver</span>
                  <br />
                  <span className="text-gray-400">near you</span>
                </h1>

                <p className="text-base md:text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                  Order your favorite meals from top-rated restaurants. Fast delivery, fresh food, amazing taste.
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative max-w-xl"
              >
                <div className="flex gap-3 p-2 bg-gray-800 rounded-full border-2 border-orange-luxury/20 hover:border-orange-luxury/40 shadow-lg hover:shadow-luxury transition-all">
                  <input
                    type="text"
                    placeholder="Enter delivery address"
                    className="flex-1 px-6 py-3.5 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-base"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-7 py-3.5 bg-gradient-to-r from-orange-deep via-orange-luxury to-orange-bright text-white rounded-full font-bold shadow-luxury hover:shadow-luxury-lg transition-all flex items-center gap-2.5 group"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Find Food</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Category Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <span className="text-sm text-gray-500 font-medium">Popular:</span>
                {['🍔 Burger', '� Pizza', '🍜 Noodles', '🍰 Desserts'].map((item, idx) => (
                  <Link to="/restaurants" key={idx}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-orange-luxury/20 hover:border-orange-luxury text-sm font-medium text-gray-300 hover:text-orange-bright shadow-sm hover:shadow-glow-sm transition-all cursor-pointer"
                    >
                      {item}
                    </motion.div>
                  </Link>
                ))}
              </motion.div>

              {/* Stats Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {[
                  { icon: <ChefHat className="w-5 h-5" />, value: '500+', label: 'Restaurants' },
                  { icon: <Truck className="w-5 h-5" />, value: '30min', label: 'Delivery' },
                  { icon: <Star className="w-5 h-5 fill-orange-luxury" />, value: '4.8', label: 'Rating' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-luxury/20 to-orange-bright/20 flex items-center justify-center text-orange-luxury group-hover:scale-110 transition-transform shadow-glow-sm">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Food Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden md:block"
            >
              <div className="relative h-[650px] flex items-center justify-center">
                {/* Main Hero Food Image - Large Burger with Glow */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1, type: "spring" }}
                  className="relative z-20"
                >
                  {/* Glow Effect Behind */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-luxury via-orange-bright to-gold-accent blur-3xl opacity-30 animate-pulse"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative w-[420px] h-[420px] rounded-full bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 shadow-luxury-lg border-4 border-orange-luxury/30 backdrop-blur-sm">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                      <img 
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" 
                        alt="Featured Burger"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Calorie Badge */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute top-4 -right-6 bg-gradient-to-r from-gold-accent to-orange-bright px-5 py-3 rounded-2xl shadow-luxury-lg border-2 border-white/20 backdrop-blur-sm z-30"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🔥</span>
                      <div>
                        <div className="text-white font-black text-lg">86</div>
                        <div className="text-white/80 text-xs font-medium">Calories</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Rating Badge */}
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute -bottom-4 -left-6 bg-gradient-to-br from-gray-900 to-gray-800 px-5 py-3 rounded-2xl shadow-luxury border-2 border-orange-luxury/50 z-30"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-orange-luxury text-orange-luxury" />
                      <div>
                        <div className="text-white font-black text-lg">4.9</div>
                        <div className="text-gray-400 text-xs font-medium">Rating</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Food Cards - Smaller & More Dynamic */}
                <motion.div 
                  animate={{ y: [0, -25, 0], rotate: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute top-8 left-0 w-36 h-36 rounded-3xl overflow-hidden shadow-luxury-lg border-3 border-orange-luxury/40 backdrop-blur-sm z-10"
                >
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80" alt="Pizza" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 28, 0], rotate: [3, -3, 3] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute bottom-16 left-4 w-44 h-44 rounded-3xl overflow-hidden shadow-luxury-lg border-3 border-orange-luxury/40 backdrop-blur-sm z-10"
                >
                  <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" alt="Salad" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [-4, 4, -4], scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                  className="absolute top-12 right-4 w-40 h-40 rounded-3xl overflow-hidden shadow-luxury-lg border-3 border-orange-luxury/40 backdrop-blur-sm z-10"
                >
                  <img src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80" alt="Tacos" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 30, 0], scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 w-36 h-36 rounded-3xl overflow-hidden shadow-luxury-lg border-3 border-orange-luxury/40 backdrop-blur-sm z-10"
                >
                  <img src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80" alt="Sushi" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-orange-luxury rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-4 border-orange-bright rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Features Section - Shown for both authenticated and non-authenticated users */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent">SoSo Foods</span>?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the best food delivery service in India with unmatched quality and convenience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: 'Fast Delivery',
                description: 'Get your food delivered hot and fresh within 30 minutes across India',
                color: 'from-orange-deep to-orange-luxury'
              },
              {
                icon: <ChefHat className="w-8 h-8" />,
                title: 'Quality Food',
                description: 'Partner restaurants with top ratings and hygiene standards',
                color: 'from-orange-luxury to-orange-bright'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Safe & Secure',
                description: 'Contactless delivery and secure payment options available',
                color: 'from-orange-bright to-gold-accent'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Best Prices',
                description: 'Competitive pricing with regular offers and discounts',
                color: 'from-gold-accent to-orange-luxury'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-luxury transition-all duration-500 border-2 border-orange-luxury/30 hover:border-orange-luxury group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-luxury group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-orange-bright transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base group-hover:text-gray-300 transition-colors">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Order your favorite food in India in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-luxury via-orange-bright to-gold-accent opacity-30" style={{ zIndex: 0 }}></div>
            
            {[
              {
                step: '01',
                icon: <MapPin className="w-10 h-10" />,
                title: 'Choose Location',
                description: 'Select your delivery address and browse nearby restaurants',
                color: 'from-orange-deep to-orange-luxury'
              },
              {
                step: '02',
                icon: <ChefHat className="w-10 h-10" />,
                title: 'Select Restaurant',
                description: 'Pick your favorite dishes from our wide variety of cuisines',
                color: 'from-orange-luxury to-orange-bright'
              },
              {
                step: '03',
                icon: <Truck className="w-10 h-10" />,
                title: 'Get Delivery',
                description: 'Sit back and relax while we deliver hot food to your doorstep',
                color: 'from-orange-bright to-gold-accent'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 group"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-luxury transition-all duration-500 border-2 border-orange-luxury/30 hover:border-orange-luxury text-center">
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-luxury group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center shadow-luxury border-2 border-orange-luxury group-hover:scale-110 transition-transform">
                      <span className="text-sm font-bold text-orange-luxury">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-orange-bright transition-colors">{step.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 shadow-luxury border-2 border-orange-luxury/20 hover:border-orange-luxury/40 transition-all duration-500"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Restaurants', icon: <ChefHat className="w-6 h-6" /> },
              { number: '10K+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
              { number: '50K+', label: 'Orders Delivered', icon: <Truck className="w-6 h-6" /> },
              { number: '4.8★', label: 'Average Rating', icon: <Star className="w-6 h-6" /> }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-orange-luxury group-hover:text-orange-bright group-hover:scale-110 transition-all">{stat.icon}</div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-luxury via-orange-bright to-gold-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400 text-sm sm:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Real experiences from our valued customers across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Food Enthusiast',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
                rating: 5,
                text: 'Absolutely love SoSo Foods! Fast delivery, hot food, and amazing variety. My go-to app for food cravings in Mumbai!'
              },
              {
                name: 'Rahul Kumar',
                role: 'Regular Customer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
                rating: 5,
                text: 'Best food delivery service in Delhi. The quality is consistent and customer service is top-notch. Highly recommend!'
              },
              {
                name: 'Anjali Patel',
                role: 'Busy Professional',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
                rating: 5,
                text: 'As someone with a hectic schedule in Bangalore, SoSo Foods is a lifesaver. Quick ordering, reliable delivery every time!'
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-luxury transition-all duration-500 border-2 border-orange-luxury/30 hover:border-orange-luxury group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-luxury text-orange-luxury group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-sm sm:text-base group-hover:text-gray-100 transition-colors">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-luxury group-hover:scale-110 group-hover:shadow-glow transition-all"
                  />
                  <div>
                    <h4 className="font-bold text-gray-100 group-hover:text-orange-bright transition-colors">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 mb-12"
        >
          <div className="bg-gradient-to-br from-orange-deep via-orange-luxury to-orange-bright rounded-3xl p-8 sm:p-12 text-center shadow-luxury hover:shadow-luxury-lg transition-all duration-500 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 group-hover:scale-105 transition-transform">
                Ready to Order?
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors">
                Join thousands of happy customers across India and get your favorite food delivered right to your door
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/restaurants">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-orange-luxury rounded-full font-bold text-lg shadow-luxury hover:shadow-luxury-lg transition-all flex items-center gap-2 hover:gap-3"
                  >
                    Browse Restaurants
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                
                <a href="tel:+918459872072">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </motion.button>
                </a>
              </div>

              <p className="text-white/80 mt-6 text-sm">
                Available 24/7 • Free delivery on orders above ₹299
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
