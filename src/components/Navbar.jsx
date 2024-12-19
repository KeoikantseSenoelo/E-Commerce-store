import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md flex items-center justify-between px-6">
      {/* Left Section (Logo or other items) */}
      

      {/* Center Section (Search Bar) */}
      <div className="flex-1 flex justify-center flex-col items-center">
        {/* "Search items" text at the top of the search bar */}
        <div className="text-sm text-gray-500 mb-1 w-full text-center"></div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 md:w-1/3 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Section (Icons or other items) */}
     
    </div>
  );
};

export default Navbar;


