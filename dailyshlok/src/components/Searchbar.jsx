import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [provider, setProvider] = useState("google");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const savedProvider = localStorage.getItem("searchProvider") || "google";
    const showSearch = localStorage.getItem("showSearchBar");
    setProvider(savedProvider);
    setVisible(showSearch !== "false");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    let url = "";

    switch (provider) {
      case "google":
        url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        break;
      case "chatgpt":
        url = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
        break;
      case "perplexity":
        url = `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`;
        break;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  const handleProviderChange = (e) => {
    const newProvider = e.target.value;
    setProvider(newProvider);
    localStorage.setItem("searchProvider", newProvider);
  };

  if (!visible) return null;

  return (
    <div className="h-full">
      <form
        onSubmit={handleSearch}
        className="h-full flex flex-col gap-3 p-5 bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-bold text-amber-800 text-center">🔍 Search</h2>
        
        <div className="flex-grow w-full">
          <div className="flex items-center bg-white rounded-lg border border-amber-300 overflow-hidden shadow-md">
            <input
              type="text"
              className="flex-grow px-4 py-3 text-amber-900 placeholder-amber-400 bg-white outline-none w-full"
              placeholder={`Search with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full">
          <select
            value={provider}
            onChange={handleProviderChange}
            className="px-3 py-2 rounded-lg border border-amber-300 bg-white text-amber-800 cursor-pointer shadow-sm flex-grow"
          >
            <option value="google">Google</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="perplexity">Perplexity</option>
          </select>
          
          <button
            type="submit"
            className="bg-amber-800 text-amber-50 px-4 py-2 rounded-lg hover:bg-amber-900 transition-all duration-300 font-medium flex-shrink-0 shadow-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;