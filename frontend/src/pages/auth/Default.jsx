import React from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex items-center justify-center px-4 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] bg-[#c9e450]"></div>

      <div className="relative z-10 rounded-xl p-6 sm:p-10 flex flex-col items-center space-y-6 max-w-sm w-full ">
        <img
          src="/assets/logo1.png"
          alt="Logo"
          className="w-70 sm:w-52 md:w-60"
        />

        <h1 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
          Welcome to Our Platform
        </h1>

        <button
          onClick={() => {
            console.log("Navigating to login...");
            navigate("/login");
          }}
          className="w-full sm:w-64 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full text-sm sm:text-base transition"
        >
          Get Started &#8594;
        </button>
      </div>
    </div>
  );
};

export default Default;
