import React from "react";

const ProductForm = ({
  form,
  file,
  isEditing,
  handleChange,
  handleFileChange,
  handleSubmit,
  resetForm,
}) => {
  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-yellow-50 shadow-2xl transform transition-transform duration-300 ease-in-out z-50">
      <div className="flex justify-between items-center px-5 py-4 border-b border-yellow-200 bg-yellow-100">
        <h2 className="text-xl font-semibold text-yellow-800">
          {isEditing ? "Edit Product" : "Add New Product"}
        </h2>
        <button
          onClick={resetForm}
          className="text-yellow-700 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-6 overflow-y-auto">
        <input
          type="file"
          name="myfile"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border border-yellow-300 rounded-md p-2 bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border border-yellow-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows="3"
          className="w-full border border-yellow-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-yellow-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="dryfruit">Dryfruit</option>
          <option value="spice">Spice</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border border-yellow-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          name="discountedprice"
          placeholder="Discounted Price"
          value={form.discountedprice}
          onChange={handleChange}
          className="w-full border border-yellow-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full border border-yellow-300 rounded-md p-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          {isEditing ? "Update Product" : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
