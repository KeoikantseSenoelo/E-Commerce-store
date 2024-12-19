import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom"; // Router setup
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Bag from "./components/Bag"; // Import Bag.js
import Navbar from "./components/Navbar";
import ItemView from "./components/ItemView";
import BagSidebar from "./components/BagSidebar"; // Import BagSidebar
import BagPage from "./components/BagPage";
import CheckoutPage from "./components/CheckoutPage";
import AddPaymentPage from "./components/AddPaymentPage";
import AddAddressPage from "./components/AddAddressPage";
import useIsMobile from "./hooks/useIsMobile"; // Import the custom hook

// Sample product data
const products = [
  { id: 1, name: "Apple Watch", price: 529.99, image: "/assets/Product-img.png", variant: "Series 5 SE" },
  { id: 2, name: "Sony ZX33OBT", price: 39.99, image: "/assets/Product-image.png", variant: "Light gray" },
  { id: 3, name: "Iphone 11", price: 619.99, image: "/assets/Productimage.png", variant: "Serious Black" },
  { id: 4, name: "Iphone 11", price: 619.99, image: "/assets/Productimg.png", variant: "Subway Blue" },
  { id: 5, name: "Iphone 11", price: 619.99, image: "/assets/Product-imag.png", variant: "Product RED" },
  { id: 6, name: "Apple Watch", price: 529.99, image: "/assets/Product-image.png", variant: "Milky White" },
  { id: 7, name: "Iphone 13", price: 619.99, image: "/assets/Product-imag.png", variant: "Product RED" },
  { id: 8, name: "Iphone 14", price: 619.99, image: "/assets/Product-imag.png", variant: "Product RED" },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const isMobile = useIsMobile(); // Use custom hook for mobile detection

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems, product];
      console.log("Cart Items Updated: ", updatedCartItems);
      return updatedCartItems;
    });
  };

  const shouldHideNavbar = [
    "/checkout",
    "/add-payment",
    "/add-address",
    "/bag", // Hide Navbar on BagPage
  ].includes(location.pathname) || location.pathname.startsWith("/item/");

  // Check if Sidebar and Bag should be hidden
  const shouldHideSidebarAndBag = [
    "/checkout",
    "/add-payment",
    "/add-address",
    "/bag",
  ].includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && <Navbar />}

      <div className="flex flex-1">
        {/* Conditionally render Sidebar */}
        {!shouldHideSidebarAndBag && <Sidebar />}

        {/* Main content */}
        <main className={`flex-1 p-4 bg-gray-100`}>
          <Routes>
            {/* Redirect to /Product for the root route */}
            <Route path="/" element={<Navigate to="/Product" />} />

            {/* Home Route to display Product Cards */}
            <Route
              path="/Product"
              element={
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                    />
                  ))}
                </div>
              }
            />

            {/* Item View */}
            <Route path="/item/:id" element={<ItemView products={products} />} />

            {/* Bag Page */}
            <Route
              path="/bag"
              element={
                <div className="flex flex-col sm:flex-row flex-1">
                  {/* Sidebar (visible on larger screens only) */}
                  <Sidebar className="hidden sm:block" />

                  <div className="flex-1 p-4">
                    {/* Main BagPage Content */}
                    <BagPage cartItems={cartItems} />
                  </div>

                  {/* BagSidebar (always visible for BagPage route, 
                      below items on small screens, and side-by-side on larger ones) */}
                  <BagSidebar
                    cartItems={cartItems}
                    className="w-full sm:w-1/4 bg-gray-200 shadow-lg mt-4 sm:mt-0 sm:ml-4"
                  />
                </div>
              }
            />

            {/* Checkout and other pages */}
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/add-payment" element={<AddPaymentPage />} />
            <Route path="/add-address" element={<AddAddressPage />} />
          </Routes>
        </main>

        {/* Hide Bag.js only on mobile */}
        {!shouldHideSidebarAndBag && !isMobile && <Bag cartItems={cartItems} />}
      </div>
    </div>
  );
};

export default App;





