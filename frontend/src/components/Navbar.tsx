import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, User, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-luxury backdrop-blur-sm sticky top-0 z-50 border-b-2 border-orange-luxury/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                        <img 
              src="/logo.svg" 
              alt="SoSo Foods Logo" 
              className="h-8 sm:h-10 w-auto group-hover:rotate-6 transition-transform duration-300"
            />
            <div className="flex flex-col items-start -ml-1">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-luxury to-orange-bright bg-clip-text text-transparent group-hover:from-orange-bright group-hover:to-gold-accent transition-all">
                SoSo Foods
              </span>
            </div>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 hover:shadow-glow-sm transition-all"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-luxury" />
            ) : (
              <Menu className="w-6 h-6 text-orange-luxury" />
            )}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link to="/restaurants" className="text-gray-300 hover:text-orange-luxury font-semibold transition-all text-lg hover:drop-shadow-glow">
                Restaurants
              </Link>
            </motion.div>
            {user ? (
              <div className="flex items-center gap-4">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-gray-300 flex items-center gap-2 font-medium hover:text-orange-bright transition-colors"
                >
                  <User className="w-5 h-5" />
                  {user.name}
                </motion.span>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-deep via-orange-luxury to-orange-bright text-white rounded-full hover:shadow-luxury transition-all duration-300 font-semibold"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/login" className="text-gray-300 hover:text-orange-luxury font-semibold transition-all text-lg hover:drop-shadow-glow">
                    Login
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/signup" className="px-5 py-2.5 bg-gradient-to-r from-orange-deep via-orange-luxury to-orange-bright text-white rounded-full hover:shadow-luxury transition-all duration-300 font-semibold">
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-orange-luxury/30 py-4 bg-gray-800/50 backdrop-blur-md"
            >
              <div className="flex flex-col space-y-4">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  <Link to="/restaurants" className="block px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-orange-luxury rounded-lg font-semibold transition-all hover:translate-x-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Restaurants
                  </Link>
                </motion.div>
                {user ? (
                  <>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="px-4 py-2 text-gray-300 flex items-center gap-2 font-medium hover:text-orange-bright transition-colors">
                      <User className="w-5 h-5" />
                      {user.name}
                    </motion.div>
                    <motion.button initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} onClick={handleLogout} className="mx-4 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-deep via-orange-luxury to-orange-bright text-white rounded-full hover:shadow-luxury transition-all duration-300 font-semibold">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                      <Link to="/login" className="block px-4 py-3 text-gray-300 hover:bg-gray-700/50 hover:text-orange-luxury rounded-lg font-semibold transition-all hover:translate-x-1" onClick={() => setIsMobileMenuOpen(false)}>
                        Login
                      </Link>
                    </motion.div>
                    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                      <Link to="/signup" className="mx-4 block text-center px-5 py-3 bg-gradient-to-r from-orange-deep via-orange-luxury to-orange-bright text-white rounded-full hover:shadow-luxury transition-all duration-300 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                        Sign Up
                      </Link>
                    </motion.div>
                  </>
                )}
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="px-4 py-2 text-gray-400 flex items-center gap-2 text-sm border-t border-orange-luxury/30 pt-4 mt-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+918459872072" className="hover:text-orange-luxury transition-colors">
                    +918459872072
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

