import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import Header from "./Components/Header";

function App() {
  const location = useLocation();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          {/* Add key to force re-render when query string changes */}
          <Route
            path="/search"
            element={<SearchResult key={location.search} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
