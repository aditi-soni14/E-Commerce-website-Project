import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //  Calculate the total price of all cart items
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="w-full px-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded"
            >
              <img src={item.image} alt={item.title} className="h-16" />
              <div className="flex-1 px-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-2 bg-gray-200"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-2 bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
              {/*  Remove Item from Cart */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          
          {/* Total Amount */}
          <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
// container mx-auto p-6