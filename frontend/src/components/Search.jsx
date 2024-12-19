import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Debounce the search to avoid excessive API calls or state updates
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="w-full p-2 border border-gray-600 bg-gray-800 text-cream rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-cream"
      aria-label="Search contacts"
    />
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
