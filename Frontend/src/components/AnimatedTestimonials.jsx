import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function AnimatedTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "SendIT has revolutionized how I handle my business deliveries. The real-time tracking gives me and my customers complete peace of mind.",
      rating: 5,
      company: "Artisan Crafts Co."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "E-commerce Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The fastest and most reliable delivery service I've ever used. Their customer support is exceptional and the tracking system is incredibly detailed.",
      rating: 5,
      company: "TechGear Plus"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "What impressed me most is their commitment to sustainability. Eco-friendly packaging and carbon-neutral delivery options make them our go-to choice.",
      rating: 5,
      company: "Green Solutions Inc."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Logistics Coordinator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "SendIT's global network is unmatched. We ship to 50+ countries and they handle everything seamlessly with transparent pricing.",
      rating: 5,
      company: "Global Trade Corp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </motion.span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 1000],
              y: [0, Math.random() * 800],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            What Our <span className="text-yellow-400">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what thousands of satisfied customers have to say about SendIT.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-12 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative"
                >
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-full border-4 border-dashed border-yellow-400 opacity-30"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl text-gray-700 mb-6 italic leading-relaxed"
                  >
                    "{testimonials[currentTestimonial].content}"
                  </motion.blockquote>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 mb-1">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-yellow-600 font-semibold">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-yellow-400 shadow-lg' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-yellow-400 bg-opacity-20 border-2 border-yellow-400' 
                    : 'bg-white bg-opacity-10 border-2 border-transparent hover:bg-opacity-20'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
                />
                <h5 className="text-white text-sm font-semibold text-center">
                  {testimonial.name}
                </h5>
                <p className="text-gray-300 text-xs text-center">
                  {testimonial.company}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          💬
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 text-6xl opacity-20"
        >
          ⭐
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedTestimonials;