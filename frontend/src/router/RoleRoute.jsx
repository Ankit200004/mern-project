import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth.js";

const RoleRoute = ({ roles = [] }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  // 1) Not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // 2) Logged in but role not in allowed list → redirect to dashboard (or an Unauthorized page)
  if (roles.length && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // 3) Authorized → render child routes
  return <Outlet />;
};

export default RoleRoute;
