import React from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch to dispatch remove action
import { removeFromBag } from "../redux/bagSlice"; // Corrected import from the slice
import { Link } from "react-router-dom";

const Bag = () => {
  const { items } = useSelector((state) => state.bag);
  const dispatch = useDispatch(); // Initialize dispatch

  const removeItem = (id) => {
    dispatch(removeFromBag(id)); // Dispatch the correct removeFromBag action
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
              src={item.image} // Assuming each item has an `image` property
              alt={item.name}
              className="w-16 h-16 object-cover mr-4"
            />
            <span className="flex-grow">{item.name}</span>
            <button
              onClick={() => removeItem(item.id)} // Corrected call to removeItem
              className="text-red-600 ml-4"
            >
              × {/* Red cross for removing */}
            </button>
          </div>
        ))
      )}

      <div className="mt-4">
        <Link to="/bag">
          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            View Bag
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bag;


