import React from "react";
import { useNavigate } from "react-router-dom";

const AddPaymentPage = () => {
  const navigate = useNavigate(); // React Router navigation hook

  // Function to handle form submission
  const handleSubmit = () => {
    navigate("/add-address"); // Navigate to AddAddress page
  };

  // Function to handle "Back" navigation
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      {/* SELECT A CARD */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3">SELECT A CARD</h3>
        <div className="space-y-2">
          {/* MasterCard */}
          <div className="flex items-center p-3 border rounded">
            <span className="mr-2 text-gray-700">💳</span>
            <span>MasterCard ending in 4242</span>
          </div>
          {/* VISA Debit */}
          <div className="flex items-center p-3 border rounded">
            <span className="mr-2 text-gray-700">💳</span>
            <span>VISA Debit ending in 2894</span>
          </div>
        </div>
      </div>

      {/* ADD A NEW CARD */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">ADD A NEW CARD</h3>
        <form className="space-y-4">
          {/* Cardholder Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Cardholder Name</label>
            <input
              type="text"
              placeholder="John Maker"
              className="w-full p-2 border rounded"
              aria-label="Cardholder Name"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              placeholder="5126-5987-2214-7621"
              className="w-full p-2 border rounded"
              aria-label="Card Number"
            />
          </div>

          {/* Expiry and CVC */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                placeholder="MM / YYYY"
                className="w-full p-2 border rounded"
                aria-label="Expiry Date"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full p-2 border rounded"
                aria-label="CVC"
              />
            </div>
          </div>

          {/* Save as Default Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="default-card"
              className="mr-2 w-4 h-4 text-green-600"
            />
            <label htmlFor="default-card" className="text-sm">
              Save this as your default payment method
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 rounded flex items-center justify-center hover:bg-gray-800"
          >
            <span className="mr-2">💳</span> Add Payment Method
          </button>
        </form>

        {/* Back Button */}
        <div className="mt-4 text-sm text-gray-500 text-left">
          <button
            onClick={handleBack}
            className="text-blue-600 underline bg-transparent border-none cursor-pointer"
          >
            Back
          </button>
          <span className="ml-2 text-green-600">🔒 Secure Connection</span>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentPage;



