import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBag } from "../redux/bagSlice";
import Sidebar from "./Sidebar";

const ItemView = ({ products }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToBag = () => {
    dispatch(addToBag(product)); // Dispatch the action to Redux
    alert(`${product.name} has been added to the bag!`);
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar className="hidden lg:block" />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 xl:p-8 bg-gray-100 ml-[250px]">
        {/* Back Button */}
        <button onClick={handleBack} className="text-gray-600 hover:text-black mb-4">
          ← Back
        </button>

        {/* Product Details Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map((thumb) => (
              <img
                key={thumb}
                src={product.image}
                alt={`Thumbnail ${thumb}`}
                className="w-16 h-16 object-contain rounded border"
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex-none">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-96 object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-start pl-4 lg:pl-8">
            {/* Product Name */}
            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

            {/* Product Rating Stars */}
            <div className="flex mt-2 mt-4">
              {[0, 1, 2, 3, 4].map((index) => (
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

            {/* Product Price */}
            <p className="text-green-600 font-bold text-xl md:text-2xl mt-2">
              ${product.price.toFixed(2)}
            </p>

            {/* Product Series */}
            <p className="text-gray-500 text-sm mt-1">{product.series}</p>

            {/* Product Short Description */}
            <p className="text-gray-600 text-sm mt-2">
              This product features the latest technology for optimal performance. <br />
              It’s designed to meet your daily needs with ease, providing reliable
              and fast solutions for all your tasks.
            </p>

            {/* Add to Bag Button */}
            <button
              onClick={handleAddToBag}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 mt-4 w-40"
            >
              Add to Bag
            </button>
          </div>
        </div>

        {/* Product Full Description */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            odio faucibus nec malesuada purus volutpat vel sed viverra...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemView;

