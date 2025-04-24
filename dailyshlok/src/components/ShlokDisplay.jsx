import React, { useState, useEffect } from "react";
import shloks from "../data/shloks";
import { motion } from "framer-motion";

const ShlokDisplay = () => {
  const getRandomShlok = () => {
    const randomIndex = Math.floor(Math.random() * shloks.length);
    return shloks[randomIndex];
  };

  const [currentShlok, setCurrentShlok] = useState(getRandomShlok);
  const [isAnimating, setIsAnimating] = useState(false);

  const refreshShlok = () => {
    const newShlok = getRandomShlok();
    setCurrentShlok(newShlok);
  };

  useEffect(() => {
    // Set shlok immediately on load
    refreshShlok();

    // Calculate time until next midnight
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // Midnight of the next day
    const msUntilMidnight = nextMidnight - now;

    // Set a timeout to trigger at midnight
    const midnightTimeout = setTimeout(() => {
      refreshShlok();

      // After first refresh, set an interval to repeat every 24 hours
      setInterval(() => {
        refreshShlok();
      }, 24 * 60 * 60 * 1000); // 24 hours
    }, msUntilMidnight);

    // Cleanup on unmount
    return () => clearTimeout(midnightTimeout);
  }, []);

  const getNewShlok = () => {
    setIsAnimating(true);
    setTimeout(() => {
      refreshShlok();
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="w-full h-full p-6 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg border border-amber-200 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="w-8"></div>
          <h1 className="text-2xl font-bold text-amber-800 text-center">Daily Wisdom</h1>
          <div className="bg-amber-800/10 p-1 rounded-md">
            <span className="text-xs text-amber-800 uppercase tracking-wider">Drag to move</span>
          </div>
        </div>

        {currentShlok ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center flex-grow"
          >
            <div className="mb-6 p-6 bg-amber-50 rounded-xl border border-amber-200 shadow-md w-full flex-grow">
              <p className="sanskrit-text text-2xl font-['Sanskrit2003'] mb-6 text-amber-900 leading-relaxed text-center">
                {currentShlok.verse}
              </p>
              <p className="text-lg text-amber-700 italic text-center">
                {currentShlok.meaning}
              </p>
            </div>

            <motion.button
              onClick={getNewShlok}
              className="bg-amber-800 text-amber-50 px-8 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-amber-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isAnimating}
            >
              Next Shlok
            </motion.button>
          </motion.div>
        ) : (
          <div className="text-center p-10 flex-grow">
            <p className="text-lg text-amber-800">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShlokDisplay;
