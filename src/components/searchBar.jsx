import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Plus } from "lucide-react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center gap-2 p-4 bg-white border-b border-gray-300">
      <input
        type="text"
        placeholder="Type here to search"
        className="flex-grow px-4 py-2 border rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2">
        <span className="material-icons">
          <Search />
        </span>
        SEARCH
      </button>
      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border hover:bg-gray-200 transition flex items-center gap-2">
        <span className="material-icons">
          <SlidersHorizontal />
        </span>
        FILTER
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-2">
        <span className="material-icons">
          <Plus />
        </span>
        ADD
      </button>
    </div>
  );
}

export default SearchBar;
