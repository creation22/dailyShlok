import React, { useState, useEffect } from "react";

const GoalTracker = () => {
  const [description, setDescription] = useState(localStorage.getItem("goalDescription") || "");
  const [targetDate, setTargetDate] = useState(localStorage.getItem("goalDate") || "");
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      if (!targetDate) return;

      const distance = new Date(targetDate) - new Date();
      if (distance <= 0) {
        setTimeLeft({ expired: true });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    // Update from localStorage whenever component mounts
    setDescription(localStorage.getItem("goalDescription") || "");
    setTargetDate(localStorage.getItem("goalDate") || "");
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6 max-w-xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-2">🎯 Your Goal</h2>

      {description && <p className="text-md font-medium">{description}</p>}

      {targetDate ? (
        timeLeft?.expired ? (
          <p className="text-red-500 mt-2">⏰ Time’s up!</p>
        ) : (
          <p className="mt-2 text-gray-700">
            ⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left
          </p>
        )
      ) : (
        <p className="text-gray-500 mt-2 italic">No goal date set. Go to settings to configure.</p>
      )}
    </div>
  );
};

export default GoalTracker;
