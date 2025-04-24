import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";

const SettingsCorner = () => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [searchProvider, setSearchProvider] = useState("google");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Load saved settings
    const savedDescription = localStorage.getItem("goalDescription") || "";
    const savedDateTime = localStorage.getItem("goalDate") || "";
    const savedSearch = localStorage.getItem("showSearchBar") === "false" ? false : true;
    const savedProvider = localStorage.getItem("searchProvider") || "google";

    setDescription(savedDescription);
    setDateTime(savedDateTime);
    setShowSearch(savedSearch);
    setSearchProvider(savedProvider);
  }, []);

  const handleSave = () => {
    localStorage.setItem("goalDescription", description);
    localStorage.setItem("goalDate", dateTime);
    localStorage.setItem("showSearchBar", showSearch);
    localStorage.setItem("searchProvider", searchProvider);
    
    // Add save animation
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setOpen(false);
      window.location.reload(); // To refresh goal tracker / search bar display
    }, 1000);
  };

  const buttonGradient = isAnimating
    ? "bg-gradient-to-r from-green-600 to-green-700"
    : "bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900";

  const buttonText = isAnimating ? "✓ Saved!" : "Save & Close";

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 bg-gradient-to-br from-amber-700 to-amber-800 text-amber-50 p-3 rounded-full shadow-lg hover:from-amber-600 hover:to-amber-900 transition-all duration-500 z-50"
        title="Settings"
      >
        <Settings size={20} />
      </button>

      {/* Settings Panel */}
      {open && (
        <div className="fixed top-16 right-4 bg-amber-50 border border-amber-200 rounded-xl shadow-xl w-[320px] max-w-[90vw] p-5 z-40">
          <h2 className="text-lg font-bold mb-4 text-amber-800">⚙️ Settings</h2>

          {/* Goal Description */}
          <div className="mb-3">
            <label className="text-sm font-medium text-amber-800">Goal Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Read 100 shloks"
              className="w-full border border-amber-300 rounded-lg px-3 py-2 mt-1 text-amber-900 bg-white placeholder-amber-400 shadow-sm focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
            />
          </div>

          {/* Goal Date & Time */}
          <div className="mb-3">
            <label className="text-sm font-medium text-amber-800">Goal Date & Time</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full border border-amber-300 rounded-lg px-3 py-2 mt-1 text-amber-900 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
            />
          </div>

          {/* Show/Hide Search Bar */}
          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={showSearch}
              onChange={(e) => setShowSearch(e.target.checked)}
              className="rounded text-amber-800 focus:ring-amber-700"
            />
            <label className="text-sm text-amber-800">Show Search Bar</label>
          </div>

          {/* Search Provider - Only visible when search is enabled */}
          {showSearch && (
            <div className="mb-4">
              <label className="text-sm font-medium text-amber-800">Search Provider</label>
              <select
                value={searchProvider}
                onChange={(e) => setSearchProvider(e.target.value)}
                className="w-full border border-amber-300 rounded-lg px-3 py-2 mt-1 text-amber-900 bg-white shadow-sm focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
              >
                <option value="google">Google</option>
                <option value="chatgpt">ChatGPT</option>
                <option value="perplexity">Perplexity</option>
              </select>
            </div>
          )}

          {/* Save Button */}
          <button
            onClick={handleSave}
            className={`${buttonGradient} text-amber-50 w-full py-2 rounded-xl transition-all duration-500 shadow-md`}
            disabled={isAnimating}
          >
            {buttonText}
          </button>
        </div>
      )}
    </>
  );
};

export default SettingsCorner;