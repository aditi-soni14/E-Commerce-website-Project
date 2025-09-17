import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-6">
       <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
       {/* Empty state check */}
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded flex flex-col items-center"
            >
              {/* Product image */}
              <img src={item.image} alt={item.title} className="h-32" />
              
              {/* Product title */}
              <h3 className="mt-2 text-sm">{item.title}</h3>
              {/* Remove from wishlist button */}
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="text-red-500 mt-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
