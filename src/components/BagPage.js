import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/bagSlice"; // Actions for incrementing and decrementing

const BagPage = () => {
  const cartItems = useSelector((state) => state.bag.items); // Fetch items from Redux
  const dispatch = useDispatch(); // Dispatch to modify Redux state

  return (
    <div className="flex flex-1 p-4 bg-gray-100 h-screen">
      <main className="flex-1 p-4 bg-gray-100 ml-64 md:ml-16 sm:ml-0">
        <h1 className="text-2xl font-bold mb-4">Check Your Bag Items</h1>
        {cartItems.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between bg-white p-4 shadow rounded-lg w-full sm:w-3/4 md:w-3/4 xl:w-2/3 h-auto min-h-48" 
              >
                <div className="flex items-center w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div className="flex-1 min-w-0"> {/* Allows text to wrap correctly */}
                    <h3 className="text-lg font-semibold mb-2 truncate">{item.name}</h3> {/* Ensure the name doesn't overflow */}
                    <p className="text-sm text-gray-500 mb-3 overflow-hidden text-ellipsis">{/* Adding text overflow handling */}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet bibendum velit, quis interdum dui efficitur eu.
                    </p>
                    <div className="flex mb-3">
                      {Array.from({ length: 5 }, (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className={`bi bi-star-fill ${index < 4 ? "text-green-500" : "text-gray-300"}`}
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.387.22-.852-.072-.73-.493l.634-3.705-2.693-2.48c-.308-.285-.145-.757.261-.811l3.748-.543L7.907.793c.147-.429.729-.429.876 0l1.366 4.612 3.748.543c.406.054.569.526.261.811l-2.693 2.48.634 3.705c.122.421-.343.713-.73.493l-3.268-1.92-3.268 1.92z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center mb-3">
                      <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
                      <div className="flex ml-auto items-center space-x-4">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          className="text-red-500 hover:text-red-700 text-3xl"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          className="text-green-500 hover:text-green-700 text-3xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => window.history.back()} // Navigate to the previous page
          className="mt-6 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
        >
          ← Back
        </button>
      </main>
    </div>
  );
};

export default BagPage;
