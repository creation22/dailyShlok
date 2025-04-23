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
    <div className="w-full">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center gap-3 p-4 bg-amber-50 border-2 border-amber-200 rounded-xl shadow-md"
      >
        <div className="flex-grow w-full">
          <div className="flex items-center bg-white rounded-lg border border-amber-300 overflow-hidden">
            <input
              type="text"
              className="flex-grow px-4 py-3 text-amber-900 placeholder-amber-400 bg-white outline-none w-full"
              placeholder={`Search with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <select
            value={provider}
            onChange={handleProviderChange}
            className="px-3 py-3 rounded-lg border border-amber-300 bg-white text-amber-800 cursor-pointer"
          >
            <option value="google">Google</option>
            <option value="chatgpt">ChatGPT</option>
            <option value="perplexity">Perplexity</option>
          </select>
          
          <button
            type="submit"
            className="bg-amber-800 text-amber-50 px-4 py-3 rounded-lg hover:bg-amber-900 transition-all duration-300 font-medium flex-shrink-0"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;