import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Heart, User } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
      setSearchTerm(""); // clear input
    }
  };

  return (
    <header className="bg-zinc-800 shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 rounded" />
        </Link>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="hidden md:flex w-1/3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="flex-grow border px-3 py-2 rounded-l-md outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-500 px-3 py-2 rounded-r-md text-white hover:bg-yellow-600"
          >
            <Search size={20} />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-white">
          <Link to="/wishlist" className="hover:text-yellow-400 transition">
            <Heart size={22} />
          </Link>
          <Link to="/cart" className="relative hover:text-yellow-400 transition">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {/* cart count here later */}
            </span>
          </Link>
          <Link to="/login" className="hover:text-yellow-400 transition">
            <User size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
