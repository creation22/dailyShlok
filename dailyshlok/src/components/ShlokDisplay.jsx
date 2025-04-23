// components/ShlokDisplay.jsx
import React, { useState } from "react";
import shloks from "../data/shloks"; // Import your shlokas data

const ShlokDisplay = () => {
  // Function to get a random shlok from the list
  const getRandomShlok = () => {
    const randomIndex = Math.floor(Math.random() * shloks.length);
    return shloks[randomIndex];
  };

  const [currentShlok, setCurrentShlok] = useState(getRandomShlok); // Initialize state with a random shlok

  const getNewShlok = () => {
    setCurrentShlok(getRandomShlok()); // Get a new random shlok when button is clicked
  };

  return (
    <div className="text-center mt-10">
      {currentShlok ? (
        <>
          <p className="text-xl font-semibold mb-2">{currentShlok.verse}</p>
          <p className="text-md text-gray-600 mb-4">{currentShlok.meaning}</p>

          <div className="mt-5">
            <button
              onClick={getNewShlok}
              className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
            >
              Get New Shlok
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p> // Show a loading state if no shlok is available
      )}
    </div>
  );
};

export default ShlokDisplay;
