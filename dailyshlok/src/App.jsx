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
      {/* Header */}
      <header className="bg-amber-800 text-amber-50 py-4 px-6 shadow-md mb-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Dharma Dashboard</h1>
        </div>
      </header>
      
      {/* Corner Components */}
      <Star />
      <SettingsCorner />
      <PayMeButton />
      
      {/* Main Grid Layout */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar />
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Shlok Display - Takes 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            <ShlokDisplay />
          </div>
          
          {/* Goal Tracker - Takes 1/3 of the space on large screens */}
          <div>
            <GoalTracker />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-amber-800 text-amber-50 py-4 px-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Dharma Dashboard</p>
        </div>
      </footer>
    </div>
  );
}

export default App;