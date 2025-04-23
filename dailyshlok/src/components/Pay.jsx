import React from "react";

// Replace with your actual "Buy Me a Coffee" link
const payMeLink = "https://www.buymeacoffee.com/creation22";

const PayMeButton = () => {
  return (
    <div className="absolute top-4 right-4">
      <a
        href={payMeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-700 hover:text-yellow-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 00-5 5 5 5 0 0010 0 5 5 0 00-5-5zM4 12a8 8 0 0116 0"
          />
        </svg>
        <span>Buy Me a Coffee</span>
      </a>
    </div>
  );
};

export default PayMeButton;
