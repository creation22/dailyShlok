import React from "react";
import SearchBar from "./components/SearchBar";
import ShlokDisplay from "./components/ShlokDisplay";
import GoalTracker from "./components/GoalTracker";
import SettingsCorner from "./components/Setting";
import Star from "./components/Star";
import PayMeButton from "./components/Pay";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      {/* Corner Components */}
      <Star />
      <SettingsCorner />
      <PayMeButton />
      
      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 pt-16">
        {/* Main Content Grid - Three columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Bar */}
          <div className="md:col-span-1">
            <SearchBar />
          </div>
          
          {/* Shlok Display */}
          <div className="md:col-span-1">
            <ShlokDisplay />
          </div>
          
          {/* Goal Tracker */}
          <div className="md:col-span-1">
            <GoalTracker />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;