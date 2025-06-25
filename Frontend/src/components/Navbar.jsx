import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="SendIT Logo" 
              className="h-16 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.1, color: "#1f2937" }}
              href="#features"
              className="text-gray-800 font-medium hover:text-gray-900 transition-colors"
            >
              Features
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#1f2937" }}
              href="#tracking"
              className="text-gray-800 font-medium hover:text-gray-900 transition-colors"
            >
              Tracking
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#1f2937" }}
              href="#testimonials"
              className="text-gray-800 font-medium hover:text-gray-900 transition-colors"
            >
              Reviews
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, color: "#1f2937" }}
              href="#contact"
              className="text-gray-800 font-medium hover:text-gray-900 transition-colors"
            >
              Contact
            </motion.a>
          </div>

          {/* CTA Button */}
          <Link to="/login">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 text-2xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white bg-opacity-95 rounded-lg mt-2"
        >
          <div className="py-4 space-y-4">
            <a href="#features" className="block px-6 py-2 text-gray-800 hover:bg-gray-100 rounded">
              Features
            </a>
            <a href="#tracking" className="block px-6 py-2 text-gray-800 hover:bg-gray-100 rounded">
              Tracking
            </a>
            <a href="#testimonials" className="block px-6 py-2 text-gray-800 hover:bg-gray-100 rounded">
              Reviews
            </a>
            <a href="#contact" className="block px-6 py-2 text-gray-800 hover:bg-gray-100 rounded">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;