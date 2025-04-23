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

  if (!visible) return null;

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 px-4 py-3 bg-white border rounded-xl shadow max-w-xl mx-auto mt-6"
    >
      <input
        type="text"
        className="flex-grow border px-3 py-2 rounded-lg"
        placeholder={`Search with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
