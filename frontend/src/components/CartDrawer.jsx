import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({
  showCart,
  setShowCart,
  cartItems,
  handleUpdateQuantity,
}) => {
  const totalAmount = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const price = item.salePrice || item.price || 0;
      return sum + price * item.quantity;
    }, 0);
  }, [cartItems]);

  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b sticky top-0 bg-white z-50">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button
          onClick={() => setShowCart(false)}
          className="text-gray-500 text-xl"
        >
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between border p-3 rounded-md shadow-sm bg-gray-50"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-3">
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-600">
                  ₹{item.salePrice || item.price} × {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.productId, item.quantity - 1)
                  }
                  className="w-7 h-7 rounded-full bg-red-500 text-white text-sm font-bold"
                >
                  −
                </button>
                <span className="text-sm">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.productId, item.quantity + 1)
                  }
                  className="w-7 h-7 rounded-full bg-green-500 text-white text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t bg-white sticky bottom-0 z-50">
          <div className="flex justify-between text-base font-medium mb-2">
            <span>Total:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
          <button
            onClick={() =>
              navigate("/checkout", {
                state: { total: totalAmount.toFixed(2) },
              })
            }
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            🛒 Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
