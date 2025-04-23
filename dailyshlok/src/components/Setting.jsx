import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";

const SettingsCorner = () => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [searchProvider, setSearchProvider] = useState("google");

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
    alert("✅ Settings saved!");
    setOpen(false);
    window.location.reload(); // To refresh goal tracker / search bar display
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition z-50"
        title="Settings"
      >
        <Settings size={20} />
      </button>

      {/* Settings Panel */}
      {open && (
        <div className="fixed bottom-20 right-6 bg-white border rounded-xl shadow-xl w-[320px] max-w-[90vw] p-5 z-40">
          <h2 className="text-lg font-semibold mb-4">⚙️ Settings</h2>

          {/* Goal Description */}
          <div className="mb-3">
            <label className="text-sm font-medium">Goal Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Read 100 shloks"
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Goal Date & Time */}
          <div className="mb-3">
            <label className="text-sm font-medium">Goal Date & Time</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          {/* Show/Hide Search Bar */}
          <div className="mb-4 flex items-center gap-2">
            <input
              type="checkbox"
              checked={showSearch}
              onChange={(e) => setShowSearch(e.target.checked)}
            />
            <label className="text-sm">Show Search Bar</label>
          </div>

          {/* Search Provider */}
          <div className="mb-4">
            <label className="text-sm font-medium">Search Provider</label>
            <select
              value={searchProvider}
              onChange={(e) => setSearchProvider(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            >
              <option value="google">Google</option>
              <option value="chatgpt">ChatGPT</option>
              <option value="perplexity">Perplexity</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="bg-indigo-600 text-white w-full py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Save & Close
          </button>
        </div>
      )}
    </>
  );
};

export default SettingsCorner;
