import React from "react";
import { addToCart } from "../services/cartService";
import { useAuth } from "../context/useAuth";

const FrontendProductCard = ({ product, onItemAdded }) => {
  const { user } = useAuth();

  const handleAddToCart = async () => {
    if (!user) return alert("Login required to add to cart");

    await addToCart({
      userId: user._id,
      productId: product._id,
      quantity: 1,
    });

    if (onItemAdded) onItemAdded();
  };

  return (
    <div className="h-125 w-80 bg-[#E6F1F1] m-3.5 rounded-4xl p-4.5 border-2 overflow-visible">
      <div className="relative h-35 w-70 bg-amber-200 rounded-4xl overflow-visible flex items-center justify-center mb-15">
        <img
          src={product.image}
          alt={product.title}
          className="w-50 h-50 object-contain mt-35 mb-10"
        />
      </div>
      <div className="m-2">
        <h2 className="font-mono font-extrabold text-3xl">{product.title}</h2>
        <span className="font-sans text-xm">{product.description}</span>
        <h3 className="text-xs text-green-700">
          discounted price: ₹{product.discountedprice}
        </h3>
        <h3 className="text-xs text-red-700">price: ₹{product.price}</h3>
      </div>
      <div className="flex justify-between m-2.5 mt-4.5">
        <div>category: {product.category}</div>
        <button
          onClick={handleAddToCart}
          className="w-10 h-10 bg-orange-500 text-white text-xl rounded-full flex items-center justify-center"
        >
          &#10133;
        </button>
      </div>
    </div>
  );
};

export default FrontendProductCard;
