import React, { useEffect, useState } from "react";
import FileUpload from "../../components/FileUpload";
import {
  getFeatureImages,
  deleteFeatureImage,
} from "../../services/FeatureService";

const AdminDashboard = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const fetchFeatureImages = async () => {
    try {
      setLoading(true);
      const res = await getFeatureImages();
      setFeatures(res.data.data);
    } catch (err) {
      console.error("Failed to fetch images", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "home") {
      fetchFeatureImages();
    }
  }, [activeTab]);

  const handleDelete = async (id) => {
    try {
      await deleteFeatureImage(id);
      setFeatures((prev) => prev.filter((img) => img._id !== id));
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white flex flex-col p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin</h2>
        <button
          onClick={() => setActiveTab("home")}
          className={`text-left px-3 py-2 rounded hover:bg-gray-700 ${
            activeTab === "home" ? "bg-gray-700" : ""
          }`}
        >
          🏠 Dashboard
        </button>
        <button
          onClick={() => setActiveTab("product")}
          className={`text-left px-3 py-2 rounded hover:bg-gray-700 ${
            activeTab === "product" ? "bg-gray-700" : ""
          }`}
        >
          📦 Product Upload
        </button>
        <button
          onClick={() => setActiveTab("orders")}
          className={`text-left px-3 py-2 rounded hover:bg-gray-700 ${
            activeTab === "orders" ? "bg-gray-700" : ""
          }`}
        >
          📋 Orders
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === "home" && (
          <>
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <FileUpload onUpload={fetchFeatureImages} />
            <h2 className="text-lg font-semibold mt-8 mb-2">
              Uploaded Feature Images
            </h2>

            {loading ? (
              <p>Loading...</p>
            ) : features.length === 0 ? (
              <p className="text-gray-500">No feature images yet.</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {features.map((item) => (
                  <div
                    key={item._id}
                    className="border rounded-lg p-2 relative group"
                  >
                    <img
                      src={item.image}
                      alt="Feature"
                      className="w-full h-40 object-cover rounded"
                    />
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "product" && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Product Upload</h1>
            {/* Replace this with actual product upload form later */}
            <p className="text-gray-600">Product upload form will go here.</p>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Orders</h1>
            {/* Replace this with actual orders content */}
            <p className="text-gray-600">Order list will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
