import React from "react";
import { useDispatch, useSelector } from "react-redux";       // Corrected imports
import { addToBag } from "../redux/bagSlice";                  // Corrected imports
import { Link } from "react-router-dom";                       // Corrected imports
import { FaShoppingBag } from "react-icons/fa";                // Corrected imports

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  // Get the current items in the bag from Redux store
  const bagItems = useSelector((state) => state.bag.items); // Access the Redux store's bag state
  
  const isProductInBag = bagItems.some(item => item.id === product.id); // Check if the product is in the cart

  if (!product) {
    return <div>Loading...</div>;  // Or any fallback UI
  }

  const handleAddToBag = () => {
    dispatch(addToBag(product));  // Dispatch action to add the product to the bag
  };

  return (
    <div className="bg-white p-2 sm:p-3 rounded shadow-md hover:shadow-lg transition-all duration-300"
         style={{ marginLeft: '60px' }}
    >
      <Link to={`/item/${product.id}`}>
        {/* Image Container */}
        <div className="w-full h-32 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center overflow-hidden rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
      </Link>

      {/* Product Name and Price directly below the image */}
      <div style={{ marginTop: '8px', paddingRight: '10px', textAlign: 'center' }}>
        <div>
          <h2 style={{ fontSize: '12px' }} className="font-semibold">{product.name}</h2>
          <p style={{ fontSize: '12px', color: '#4B5563' }}>${product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Add to Cart button */}
      <div className="flex justify-center mt-2">
        <button
          onClick={handleAddToBag}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 flex items-center justify-center"
        >
          {/* Update Bag Icon when product is in cart */}
          <FaShoppingBag
            className={`text-lg ${isProductInBag ? "text-blue-500" : "text-black"} transition-colors duration-300`}  // Color change
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
