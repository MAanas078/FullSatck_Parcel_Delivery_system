import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://cdn.dribbble.com/users/1138875/screenshots/15147711/media/a7c17bb5c6b6b8b8b8b8b8b8b8b8b8b8.gif",
    "https://cdn.dribbble.com/users/1138875/screenshots/14147711/media/delivery-animation.gif",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const words = ["FAST,", "SECURE", "&", "RELIABLE", "PARCEL", "DELIVERY", "ANYTIME,", "ANYWHERE!"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4C724", "#9B59B6", "#E74C3C", "#1ABC9C", "#FF8C00"];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 1000],
              y: [0, Math.random() * 800],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-between min-h-screen p-8 lg:p-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    color: colors[index % colors.length]
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 3,
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Experience the future of parcel delivery with our cutting-edge tracking system, 
            real-time updates, and guaranteed secure delivery to any destination worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(233, 235, 119, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Shipping Now
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "#E9EB77"
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Track Package
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            {[
              { number: "50K+", label: "Deliveries" },
              { number: "99.9%", label: "Success Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Interactive Image */}
        <div className="flex-1 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <img
                src="/hero.png"
                alt="Delivery Hero"
                className="w-96 h-96 object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 30, 0],
                y: [0, -15, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 bg-yellow-400 p-4 rounded-full shadow-lg"
            >
              <span className="text-2xl">📦</span>
            </motion.div>

            <motion.div
              animate={{ 
                x: [0, -25, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-20 left-10 bg-blue-500 p-4 rounded-full shadow-lg"
            >
              <span className="text-2xl">🚚</span>
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-0 bg-green-500 p-3 rounded-full shadow-lg"
            >
              <span className="text-xl">✓</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;