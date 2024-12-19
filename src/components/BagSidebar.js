import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

const BagSidebar = () => {
  const items = useSelector((state) => state.bag.items); // Get items from the state
  const navigate = useNavigate(); // Hook for navigation

  // Calculate the total price of items in the bag
  const totalPrice = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  // Function to handle Checkout navigation
  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to the CheckoutPage route
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Bag</h2>

      {items.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="flex items-center mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover mr-4"
            />
            <span>{item.name}</span>
            <span className="ml-2">x{item.quantity}</span> {/* Display the quantity */}
          </div>
        ))
      )}

      {/* Display total price */}
      <div className="mt-4">
        <p className="font-semibold text-lg">Bag Total: ${totalPrice}</p>
      </div>

      {/* Checkout button navigates to CheckoutPage */}
      <div className="mt-4">
        <button
          className="mt-2 bg-black text-white px-4 py-2 rounded-full"
          onClick={handleCheckout} // Navigate to CheckoutPage
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default BagSidebar;



