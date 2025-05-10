import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
