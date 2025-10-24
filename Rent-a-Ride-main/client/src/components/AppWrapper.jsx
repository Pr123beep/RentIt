import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import { AnimatePresence, motion } from 'framer-motion';

const AppWrapper = ({ children }) => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Always show preloader on page load/refresh
    setShowPreloader(true);
    
    // Wait for both:
    // 1. Minimum display time (3 seconds for nice experience)
    // 2. Page actually loaded
    let minTimeReached = false;
    let pageLoaded = false;

    const minTimer = setTimeout(() => {
      minTimeReached = true;
      if (pageLoaded) {
        setShowPreloader(false);
      }
    }, 3500); // 3.5 seconds minimum

    const handleLoad = () => {
      pageLoaded = true;
      if (minTimeReached) {
        setShowPreloader(false);
      }
    };

    // Check if page already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    setIsReady(true);

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isReady) return null;

  return (
    <AnimatePresence mode="wait">
      {showPreloader ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppWrapper;

