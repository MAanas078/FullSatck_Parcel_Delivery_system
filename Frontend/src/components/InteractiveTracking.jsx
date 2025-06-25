import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function InteractiveTracking() {
  const [activeStep, setActiveStep] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  const trackingSteps = [
    {
      id: 1,
      title: "Order Placed",
      description: "Your parcel has been registered in our system",
      icon: "📋",
      color: "bg-blue-500",
      time: "2 mins ago"
    },
    {
      id: 2,
      title: "Package Picked Up",
      description: "Our courier has collected your package",
      icon: "📦",
      color: "bg-yellow-500",
      time: "1 hour ago"
    },
    {
      id: 3,
      title: "In Transit",
      description: "Your package is on its way to the destination",
      icon: "🚚",
      color: "bg-orange-500",
      time: "3 hours ago"
    },
    {
      id: 4,
      title: "Out for Delivery",
      description: "Package is out for final delivery",
      icon: "🏃‍♂️",
      color: "bg-purple-500",
      time: "30 mins ago"
    },
    {
      id: 5,
      title: "Delivered",
      description: "Package successfully delivered!",
      icon: "✅",
      color: "bg-green-500",
      time: "Just now"
    }
  ];

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev < trackingSteps.length - 1) {
            return prev + 1;
          } else {
            setIsTracking(false);
            return prev;
          }
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isTracking, trackingSteps.length]);

  const startTracking = () => {
    setActiveStep(0);
    setIsTracking(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Track Your Package in <span className="text-yellow-400">Real-Time</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience our advanced tracking system with live updates and precise location data.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startTracking}
            disabled={isTracking}
            className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              isTracking 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:shadow-lg'
            }`}
          >
            {isTracking ? 'Tracking in Progress...' : 'Start Demo Tracking'}
          </motion.button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tracking Timeline */}
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-600 rounded-full">
              <motion.div
                className="bg-gradient-to-b from-yellow-400 to-green-500 w-full rounded-full"
                initial={{ height: "0%" }}
                animate={{ 
                  height: `${((activeStep + 1) / trackingSteps.length) * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Tracking Steps */}
            <div className="space-y-8">
              {trackingSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: index <= activeStep ? 1 : 0.3,
                    x: 0,
                    scale: index === activeStep ? 1.05 : 1
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center"
                >
                  {/* Step Icon */}
                  <motion.div
                    animate={{ 
                      scale: index === activeStep ? [1, 1.2, 1] : 1,
                      rotate: index <= activeStep ? 360 : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.5, repeat: index === activeStep ? Infinity : 0 },
                      rotate: { duration: 0.5 }
                    }}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                      index <= activeStep ? step.color : 'bg-gray-600'
                    } shadow-lg`}
                  >
                    {step.icon}
                    
                    {/* Pulse effect for active step */}
                    {index === activeStep && (
                      <motion.div
                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full ${step.color} opacity-30`}
                      />
                    )}
                  </motion.div>

                  {/* Step Content */}
                  <div className="ml-8 flex-1">
                    <motion.div
                      animate={{ 
                        backgroundColor: index <= activeStep ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)'
                      }}
                      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${
                            index <= activeStep ? 'text-white' : 'text-gray-400'
                          }`}>
                            {step.title}
                          </h3>
                          <p className={`${
                            index <= activeStep ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                        <span className={`text-sm ${
                          index <= activeStep ? 'text-yellow-400' : 'text-gray-500'
                        }`}>
                          {step.time}
                        </span>
                      </div>

                      {/* Progress indicator for current step */}
                      {index === activeStep && (
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2 }}
                          className="mt-4 h-1 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full"
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Delivery Truck Animation */}
          <motion.div
            animate={{ 
              x: isTracking ? [0, 300, 600, 900, 1200] : 0,
            }}
            transition={{ 
              duration: trackingSteps.length * 2,
              ease: "linear"
            }}
            className="mt-12 text-6xl"
          >
            🚚
          </motion.div>

          {/* Completion Celebration */}
          <AnimatePresence>
            {activeStep === trackingSteps.length - 1 && !isTracking && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="mt-12 text-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-8xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Package Delivered Successfully!
                </h3>
                <p className="text-gray-300">
                  Thank you for choosing SendIT for your delivery needs.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default InteractiveTracking;