import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
