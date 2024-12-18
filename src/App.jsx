import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Removed Router import
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Bag from "./components/Bag";
import Navbar from "./components/Navbar";
import ItemView from "./components/ItemView";
import BagSidebar from "./components/BagSidebar";
import BagPage from "./components/BagPage";
import CheckoutPage from "./components/CheckoutPage";
import AddPaymentPage from "./components/AddPaymentPage";
import AddAddressPage from "./components/AddAddressPage";

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

  const addToCart = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    console.log("Cart Items Updated: ", newCartItems);
  };

  const shouldHideNavbar = [
    "/bag",
    "/checkout",
    "/add-payment",
    "/add-address",
  ].includes(location.pathname) || location.pathname.startsWith("/item/");

  const shouldHideSidebar = ["/checkout", "/add-payment", "/add-address"].includes(
    location.pathname
  );

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar will be hidden on some pages */}
      {!shouldHideNavbar && <Navbar />}

      <div className="flex flex-1">
        {/* Sidebar will also be hidden on some pages */}
        {!shouldHideSidebar && <Sidebar />}

        <main className={`flex-1 p-4 bg-gray-100 ${shouldHideSidebar ? "w-full" : ""}`}>
          <Routes>
            {/* Default Route is home page that displays Product Cards */}
            <Route
              path="/"
              element={
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-[58px]">
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
            {/* Item View Route */}
            <Route path="/item/:id" element={<ItemView products={products} />} />
            {/* Bag Page */}
            <Route path="/bag" element={<BagPage cartItems={cartItems} />} />
            {/* Checkout Pages */}
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/add-payment" element={<AddPaymentPage />} />
            <Route path="/add-address" element={<AddAddressPage />} />
          </Routes>
        </main>

        {/* Sidebar handling in checkout */}
        {!shouldHideSidebar && (
          <aside className="w-64 bg-gray-200 p-2">
            {location.pathname === "/bag" ? (
              <BagSidebar cartItems={cartItems} />
            ) : (
              <Bag cartItems={cartItems} />
            )}
          </aside>
        )}
      </div>
    </div>
  );
};

export default App;
