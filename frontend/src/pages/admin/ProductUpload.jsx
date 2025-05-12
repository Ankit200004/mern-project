import React, { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import {
  getProducts,
  uploadImage,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";

const ProductUpload = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "dryfruit",
    price: "",
    discountedprice: "",
    stock: "",
  });
  const [file, setFile] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (file) {
        const formData = new FormData();
        formData.append("my_file", file);
        const uploadRes = await uploadImage(formData);
        imageUrl = uploadRes.data.result.url;
      }

      const payload = { ...form, ...(imageUrl && { image: imageUrl }) };

      if (isEditing) {
        await updateProduct(editId, payload);
      } else {
        await addProduct(payload);
      }

      alert(`✅ Product ${isEditing ? "updated" : "added"} successfully!`);
      resetForm();
      fetchProducts();
    } catch (err) {
      console.error("Error submitting product:", err);
      alert("❌ Something went wrong!");
    }
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditId(product._id);
    setIsEditing(true);
    setShowSidebar(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await deleteProduct(id);
      alert("🗑️ Product deleted successfully!");
      fetchProducts();
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ Failed to delete product");
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      category: "dryfruit",
      price: "",
      discountedprice: "",
      stock: "",
    });
    setFile(null);
    setEditId(null);
    setIsEditing(false);
    setShowSidebar(false);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 p-4">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowSidebar(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
        >
          Upload Product
        </button>
      </div>

      {showSidebar && (
        <ProductForm
          form={form}
          file={file}
          isEditing={isEditing}
          handleChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          handleFileChange={(e) => setFile(e.target.files[0])}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
      )}

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ProductUpload;
