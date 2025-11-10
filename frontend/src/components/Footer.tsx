import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t-2 border-orange-luxury/50 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <motion.img 
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="/logo.svg" 
                alt="SoSo Foods Logo" 
                className="h-10 w-10" 
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-luxury via-orange-bright to-gold-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                SoSo Foods
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4 hover:text-gray-300 transition-colors">
              India's favorite restaurants, delivered fresh to your doorstep.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-luxury transition-all text-sm hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-400 hover:text-orange-luxury transition-all text-sm hover:translate-x-1 inline-block">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-orange-luxury transition-all text-sm hover:translate-x-1 inline-block">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-400 hover:text-orange-luxury transition-all text-sm hover:translate-x-1 inline-block">
                  Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-gray-200 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm group">
                <Phone className="w-4 h-4 mt-0.5 text-orange-luxury group-hover:rotate-12 transition-transform" />
                <a href="tel:+918459872072" className="hover:text-orange-luxury transition-colors">
                  +918459872072
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm group">
                <Mail className="w-4 h-4 mt-0.5 text-orange-luxury group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@sosofoods.in" className="hover:text-orange-luxury transition-colors">
                  hello@sosofoods.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm group">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-luxury group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-gray-300 transition-colors">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-gray-200 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-orange-deep to-orange-luxury rounded-full flex items-center justify-center text-white shadow-luxury hover:shadow-glow transition-all"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-orange-luxury to-orange-bright rounded-full flex items-center justify-center text-white shadow-luxury hover:shadow-glow transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-orange-bright to-gold-accent rounded-full flex items-center justify-center text-white shadow-luxury hover:shadow-glow transition-all"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-orange-luxury/30 text-center">
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors">
            © {new Date().getFullYear()} SoSo Foods. All rights reserved. | Made with ❤️ for food lovers in India
          </p>
        </div>
      </div>
    </footer>
  );
}
