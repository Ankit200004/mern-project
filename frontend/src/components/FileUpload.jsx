import React, { useState } from "react";
import { uploadImage, addFeatureImage } from "../services/FeatureService";

export default function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("my_file", file);

      const uploadRes = await uploadImage(formData);
      const imageUrl = uploadRes?.data?.result?.url;

      if (imageUrl) {
        await addFeatureImage(imageUrl);
        setMessage("✅ Image uploaded and saved!");
        setFile(null);
        onUpload?.(); // refresh list
      } else {
        setMessage("❌ Upload succeeded but no URL returned.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto border border-gray-300 p-6 rounded-2xl shadow-sm bg-white flex flex-col gap-4 items-center">
      <label className="w-full">
        <input type="file" onChange={handleChange} className="hidden" />
        <div className="cursor-pointer border border-dashed border-gray-400 rounded-xl px-6 py-4 w-full text-center hover:bg-gray-50 transition">
          {file ? (
            <p className="text-sm font-medium text-gray-700">{file.name}</p>
          ) : (
            <p className="text-sm text-gray-500">Click to choose a file</p>
          )}
        </div>
      </label>

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 w-full"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>

      {message && (
        <p
          className={`text-sm text-center ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
