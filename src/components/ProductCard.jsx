import React from "react";
import { useDispatch } from "react-redux";
import { addToBag } from "../redux/bagSlice";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa"; // Import bag icon from react-icons

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(addToBag(product)); // Dispatch action to add the product to Redux state
  };

  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
      <Link to={`/item/${product.id}`}>
        {/* Image Container */}
        <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      </Link>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>

      {/* Bag Icon */}
      <button
        onClick={handleAddToBag}
        className="mt-2 bg-white text-black p-2 rounded-full hover:bg-gray-200 flex items-center justify-center"
      >
        <FaShoppingBag className="text-black text-lg" />
      </button>
    </div>
  );
};

export default ProductCard;

