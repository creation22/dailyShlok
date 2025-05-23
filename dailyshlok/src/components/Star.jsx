import React, { useState } from "react";

// GitHub repo URL
const repoUrl = "https://github.com/creation22/dailyShlok";

const Star = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-40">
      <a
        href={repoUrl}
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
            d="M12 17l-3.5 2 1-4.5L5 9l4.5-.5L12 2l2.5 6.5L19 9l-4.5 5.5 1 4.5L12 17z"
          />
        </svg>
        <span className="font-medium">Star Repo</span>
      </a>
    </div>
  );
};

export default Star;