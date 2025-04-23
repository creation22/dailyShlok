import React from "react";

// GitHub repo URL
const repoUrl = "https://github.com/creation22/dailyShlok";

const Star = () => {
  return (
    <div className="absolute top-4 left-4">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-500"
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
            d="M12 17l-3.5 2 1-4.5L5 9l4.5-.5L12 2l2.5 6.5L19 9l-4.5 5.5 1 4.5L12 17z"
          />
        </svg>
        <span>Star Repo</span>
      </a>
    </div>
  );
};

export default Star;

