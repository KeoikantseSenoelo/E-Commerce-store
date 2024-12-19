import React from "react";

const AddAddressPage = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-gray-400 text-sm mb-4">Add-Address</h2>

        {/* Shipping Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Shipping Name</label>
          <input
            type="text"
            placeholder="John Maker"
            className="w-full p-2 border rounded-lg shadow-sm"
          />
        </div>

        {/* Street Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Street Name</label>
          <input
            type="text"
            placeholder="123 Plae Grond Stret"
            className="w-full p-2 border rounded-lg shadow-sm"
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">City</label>
          <input
            type="text"
            placeholder="Vermont"
            className="w-full p-2 border rounded-lg shadow-sm"
          />
        </div>

        {/* State/Province */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">State / Province</label>
          <input
            type="text"
            placeholder="California"
            className="w-full p-2 border rounded-lg shadow-sm"
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">Country</label>
          <input
            type="text"
            placeholder="United States of America"
            className="w-full p-2 border rounded-lg shadow-sm"
          />
        </div>

        {/* Save as Default Checkbox */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="default-address"
            className="w-4 h-4 mr-2"
          />
          <label htmlFor="default-address" className="text-sm text-gray-600">
            Save this as your default address
          </label>
        </div>

        {/* Add Address Button */}
        <button className="w-full bg-black text-white p-2 rounded-lg shadow-md hover:bg-gray-800">
          Add Address
        </button>

        {/* Back and Secure Connection */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <button
            onClick={handleBack}
            className="text-gray-500 underline"
          >
            Back
          </button>
          <span className="text-green-600 flex items-center">
            🔒 Secure Connection
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddAddressPage;
