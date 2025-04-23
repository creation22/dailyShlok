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

  const formatTimeUnit = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="h-full p-5 bg-gradient-to-br from-amber-100 to-amber-50 shadow-lg rounded-2xl border border-amber-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-amber-800">🎯 Your Goal</h2>
        <div className="bg-amber-800/10 p-1 rounded-md">
          <span className="text-xs text-amber-800 uppercase tracking-wider">Drag to move</span>
        </div>
      </div>

      {/* Smaller description */}
      {description ? (
        <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 shadow-sm mb-4 max-h-16 overflow-auto">
          <p className="text-sm font-medium text-amber-900">{description}</p>
        </div>
      ) : (
        <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 shadow-sm mb-4">
          <p className="text-sm text-amber-700 italic">No goal description set</p>
        </div>
      )}

      {/* Timer */}
      {targetDate ? (
        timeLeft?.expired ? (
          <div className="bg-red-50 p-4 rounded-xl border border-red-200 shadow-md">
            <p className="text-xl font-bold text-red-600 mb-2 text-center">⏰ Time's up!</p>
            <p className="text-red-500 text-center">Your goal deadline has passed</p>
          </div>
        ) : (
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-md">
            <p className="text-amber-800 font-medium mb-2 text-center">Time Remaining:</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-gradient-to-b from-amber-700 to-amber-800 text-amber-50 p-2 rounded-lg shadow-md">
                <p className="text-2xl font-bold">{formatTimeUnit(timeLeft.days || 0)}</p>
                <p className="text-xs uppercase tracking-wider">Days</p>
              </div>
              <div className="bg-gradient-to-b from-amber-700 to-amber-800 text-amber-50 p-2 rounded-lg shadow-md">
                <p className="text-2xl font-bold">{formatTimeUnit(timeLeft.hours || 0)}</p>
                <p className="text-xs uppercase tracking-wider">Hrs</p>
              </div>
              <div className="bg-gradient-to-b from-amber-700 to-amber-800 text-amber-50 p-2 rounded-lg shadow-md">
                <p className="text-2xl font-bold">{formatTimeUnit(timeLeft.minutes || 0)}</p>
                <p className="text-xs uppercase tracking-wider">Min</p>
              </div>
              <div className="bg-gradient-to-b from-amber-700 to-amber-800 text-amber-50 p-2 rounded-lg shadow-md">
                <p className="text-2xl font-bold">{formatTimeUnit(timeLeft.seconds || 0)}</p>
                <p className="text-xs uppercase tracking-wider">Sec</p>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 shadow-sm">
          <p className="text-amber-700 italic text-center">No goal date set. Use settings to configure.</p>
        </div>
      )}
    </div>
  );
};

export default GoalTracker;