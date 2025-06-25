import { motion } from "framer-motion";
import { useState } from "react";

function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Real-Time Tracking",
      description: "Track your parcels in real-time with GPS precision and live updates every step of the way.",
      icon: "🛰️",
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Secure Delivery",
      description: "End-to-end encryption and secure handling ensure your packages arrive safely and intact.",
      icon: "🔒",
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Lightning Fast",
      description: "Express delivery options with same-day and next-day delivery available in major cities.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Global Network",
      description: "Worldwide delivery network covering 200+ countries with local expertise everywhere.",
      icon: "🌍",
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Smart Notifications",
      description: "Intelligent alerts via SMS, email, and push notifications keep you informed at every stage.",
      icon: "📱",
      color: "from-indigo-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Eco-Friendly",
      description: "Carbon-neutral delivery options with electric vehicles and sustainable packaging materials.",
      icon: "🌱",
      color: "from-green-400 to-teal-500",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-yellow-500">SendIT</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of parcel delivery with our innovative features designed 
            to make shipping simple, secure, and lightning-fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              onHoverStart={() => setHoveredFeature(feature.id)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="relative group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${feature.color} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="bg-white rounded-xl p-8 h-full">
                  <motion.div
                    animate={{ 
                      scale: hoveredFeature === feature.id ? 1.2 : 1,
                      rotate: hoveredFeature === feature.id ? 360 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl mb-6 text-center"
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredFeature === feature.id ? 1 : 0,
                      height: hoveredFeature === feature.id ? "auto" : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 overflow-hidden"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </motion.div>

                  {/* Floating particles effect */}
                  {hoveredFeature === feature.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                          style={{
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%"
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1M+", label: "Happy Customers", icon: "😊" },
              { number: "200+", label: "Countries", icon: "🌍" },
              { number: "99.9%", label: "Delivery Success", icon: "✅" },
              { number: "24/7", label: "Customer Support", icon: "🎧" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="text-4xl mb-4"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;