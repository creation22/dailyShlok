import React, { useState, useEffect } from "react";
import shloks from "../data/shloks"; // Import your shlokas data
import { motion } from "framer-motion";

const ShlokDisplay = () => {
  // Function to get a random shlok from the list
  const getRandomShlok = () => {
    const randomIndex = Math.floor(Math.random() * shloks.length);
    return shloks[randomIndex];
  };

  const [currentShlok, setCurrentShlok] = useState(getRandomShlok);
  const [isAnimating, setIsAnimating] = useState(false);

  const getNewShlok = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentShlok(getRandomShlok());
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="w-full h-full p-6 rounded-2xl bg-amber-100 shadow-lg border-2 border-amber-200 flex flex-col">
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-amber-800 text-center">Daily Wisdom</h1>
        
        {currentShlok ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAnimating ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center flex-grow"
          >
            <div className="mb-6 p-6 bg-amber-50 rounded-xl border border-amber-200 shadow-sm w-full flex-grow">
              <p className="text-xl lg:text-2xl font-serif font-medium mb-6 text-amber-900 leading-relaxed text-center">
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
            <p className="text-xl text-amber-800">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShlokDisplay;