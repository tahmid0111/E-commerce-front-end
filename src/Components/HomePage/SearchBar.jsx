import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center w-full my-10">
      <input
        type="text"
        placeholder="Search..."
        className="block w-[50%] px-3 py-2 rounded-lg border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-pink-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-600"
      />

      <button
        type="button"
        className="ml-2 px-3 py-2 rounded-lg bg-white text-black font-bold hover:bg-gray-200">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
