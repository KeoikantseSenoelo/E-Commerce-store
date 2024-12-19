import React from "react";
import { useDispatch } from "react-redux";        // Corrected import
import { addToBag } from "../redux/bagSlice";     // Corrected import
import { Link } from "react-router-dom";          // Corrected import
import { FaShoppingBag } from "react-icons/fa";   // Corrected import

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) {
    return <div>Loading...</div>;  // Or any fallback UI
  }

  const handleAddToBag = () => {
    dispatch(addToBag(product));  // Dispatch action to add the product to Redux state
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
          <FaShoppingBag className="text-black text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
