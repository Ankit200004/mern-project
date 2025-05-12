import React from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

const HomePage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user?.username} 👋</h1>
      <button
        onClick={handleLogout}
        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
