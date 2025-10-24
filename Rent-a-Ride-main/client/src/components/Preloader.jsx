import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth loading progress that syncs with AppWrapper timing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Progressive speed: fast -> medium -> slow for smooth UX
        let increment;
        if (prev < 30) {
          increment = Math.random() * 15 + 10; // Fast start (10-25%)
        } else if (prev < 70) {
          increment = Math.random() * 10 + 5; // Medium (5-15%)
        } else {
          increment = Math.random() * 5 + 2; // Slow finish (2-7%)
        }
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden"
    >
          {/* Animated Background Circles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-green-500 opacity-10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-green-400 opacity-10 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Animated Car Icon */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="text-white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 17h-.5c-.28 0-.5-.22-.5-.5v-3c0-.83.67-1.5 1.5-1.5h12c.83 0 1.5.67 1.5 1.5v3c0 .28-.22.5-.5.5H18M5 17v-3.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V17M5 17v2m14-2v2M7.5 17a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm12 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 12l.5-4h3l.5 4"
                  />
                </svg>
              </motion.div>

              {/* Animated Road Lines */}
              <motion.div 
                className="absolute -bottom-4 left-0 right-0 flex justify-center gap-4"
                animate={{
                  x: [-100, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-1 bg-white opacity-50 rounded-full" />
                ))}
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Rent-a-Ride
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-green-100 mb-12"
            >
              Your journey begins here
            </motion.p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto px-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-white to-green-200 rounded-full shadow-lg"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-4 text-white font-semibold text-lg"
              >
                {Math.round(progress)}%
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 text-green-100 text-sm flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Loading your experience...</span>
            </motion.div>

            {/* Animated Icons */}
            <div className="mt-12 flex justify-center gap-8">
              {[
                { icon: "🚗", delay: 0.2 },
                { icon: "🏎️", delay: 0.4 },
                { icon: "🚙", delay: 0.6 },
                { icon: "🚕", delay: 0.8 },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    delay: item.delay,
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-4xl"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
    </motion.div>
  );
};

export default Preloader;

