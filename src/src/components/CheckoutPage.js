import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import dispatch to trigger actions
import { incrementQuantity, decrementQuantity } from "../redux/bagSlice"; // Update this based on your file structure

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get dispatch to dispatch actions
  const { items } = useSelector((state) => state.bag); // Get items from Redux state

  // Calculate the total price based on items
  const calculateTotal = () => {
    const totalItems = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 6.99; // Static shipping cost for this example, can be dynamic if needed
    const gst = totalItems * 0.13; // Example GST of 13%
    const total = totalItems + shipping + gst;

    return { totalItems, shipping, gst, total };
  };

  const { totalItems, shipping, gst, total } = calculateTotal();

  const handlePlaceOrder = () => {
    // Navigate to the Add Payment page when the button is clicked
    navigate("/add-payment");
  };

  const handleChangeShippingAddress = () => {
    // Navigate to the AddAddressPage when the "Change" button in Shipping Address is clicked
    navigate("/add-address");
  };

  const handleChangePaymentMethod = () => {
    // Navigate to the AddPaymentPage when the "Change" button in Payment Method is clicked
    navigate("/add-payment");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Shipping Address */}
        <div className="p-4 pt-16 mt-12 mb-6 border rounded-lg md:col-span-2 max-w-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg mb-2">SHIPPING ADDRESS</h3>
              <p>John Maker</p>
              <p>123 Plae Grond Street</p>
              <p>Vermont, California</p>
              <p>United States of America</p>
            </div>
            <button
              onClick={handleChangeShippingAddress}
              className="text-black border border-gray-400 px-3 py-1 rounded-lg shadow-sm"
            >
              Change
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="p-4 border rounded-lg flex flex-col items-center w-60">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="flex justify-between w-full">
            <span>Items:</span>
            <span>${totalItems.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Estimated GST:</span>
            <span>${gst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between w-full mb-4">
            <span>Gift Card:</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between w-full font-semibold text-red-600 text-lg">
            <span>Order Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-4 w-full bg-black text-white py-2 rounded"
          >
            Place your order
          </button>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-gray-600 border px-4 py-2 w-32 rounded"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mt-6 p-4 border rounded-lg max-w-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">PAYMENT METHOD</h3>
            <p>💳 Mastercard ending in 1252</p>
            <p>🎁 $53.21 gift card balance</p>
            <p>✅ Billing address same as Shipping Address</p>
          </div>
          <button
            onClick={handleChangePaymentMethod}
            className="text-black border border-gray-400 px-3 py-1 rounded-lg shadow-sm"
          >
            Change
          </button>
        </div>
      </div>

      {/* Review Your Bag */}
      <div className="mt-6 p-4 border rounded-lg max-w-md">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">REVIEW YOUR BAG</h3>
            {/* Display each item from the Redux bag state */}
            {items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.image} // Assuming each item has an image property
                  alt={item.name}
                  className="w-16 h-16 rounded mr-4"
                />
                <div className="flex items-center w-full justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-600">{item.color}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Decrement Quantity Button (Red) */}
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="text-red-500 font-semibold"
                    >
                      −
                    </button>
                    {/* Quantity Display */}
                    <span>{item.quantity}</span>
                    {/* Increment Quantity Button (Green) */}
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="text-green-500 font-semibold"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-600">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;


