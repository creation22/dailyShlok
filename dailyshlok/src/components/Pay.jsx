import React, { useState } from "react";

// Replace with your actual "Buy Me a Coffee" link
const payMeLink = "https://www.buymeacoffee.com/creation22";

const PayMeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <a
        href={payMeLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center space-x-2 ${
          isHovered ? "text-amber-900 bg-amber-100" : "text-amber-800 bg-amber-50"
        } p-2 rounded-lg shadow-md border border-amber-200 transition-all duration-500 hover:shadow-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isHovered ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5 transition-all duration-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span className="font-medium">Support Project</span>
      </a>
    </div>
  );
};

export default PayMeButton;