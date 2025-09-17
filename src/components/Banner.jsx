import React from "react";
// Importing the banner image asset
 import banner from "../assets/banner.png" 
function Banner() {
  return (
    <div className="relative">
      <img src={banner} alt="Banner" className="w-full h-64 object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Welcome to Our Store
        </h1>
      </div> 
    </div>
  );
}

export default Banner;
