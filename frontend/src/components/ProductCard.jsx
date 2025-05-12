import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-yellow-300">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-cover border-b border-yellow-200"
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-yellow-800">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-green-600 font-bold">
          ₹{product.discountedprice}
        </span>
        <span className="line-through text-gray-400">₹{product.price}</span>
      </div>
      <p className="text-xs mt-1 text-gray-500">Category: {product.category}</p>
      <p className="text-xs text-gray-500">Stock: {product.stock}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onEdit(product)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(product._id)}
          className="px-4 py-2 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
