import React from "react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* About Us Section  */}
        <div>
          <h3 className="font-bold mb-2">About Us</h3>
          <p>We sell the best products online with free shipping & 24/7 support.</p>
        </div>
        {/* 🔹 Quick Links Section */}
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Newsletter</h3>
          <input
            type="text"
            placeholder="Your email"
            className="px-2 py-1 rounded w-full text-black"
          />
          {/* Button is not wired to any functionality (e.g., API call or form submission) */}
          <button className="bg-yellow-500 text-white px-3 py-1 mt-2 rounded"> 
          </button>
        </div>
      </div>
      <p className="text-center mt-4 text-sm">
        © {new Date().getFullYear()} E-commerce Website. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
