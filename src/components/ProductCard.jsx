import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToWishlist } from "../redux/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto"
        />
      </Link>
      <h2 className="mt-2 font-semibold text-sm truncate">{product.title}</h2>
      <p className="text-yellow-600 font-bold">${product.price}</p>
      <div className="flex items-center text-yellow-500">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
        >
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(addToWishlist(product))}
          className="text-red-500"
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;


