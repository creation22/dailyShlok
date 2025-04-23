import React from "react";

// Replace with your actual "Buy Me a Coffee" link
const payMeLink = "https://www.buymeacoffee.com/creation22";

const PayMeButton = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <a
        href={payMeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-amber-800 hover:text-amber-900 bg-amber-50 p-2 rounded-lg shadow-md border border-amber-200 transition-all duration-300 hover:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
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