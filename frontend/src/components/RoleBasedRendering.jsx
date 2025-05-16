import { useAuth } from "../context/useAuth.js";
import HomePage from "../pages/user/Home";
import AdminDashboard from "../pages/admin/AdminDashboard";

const RoleBasedRendering = () => {
  const { user } = useAuth();
  if (!user) return null;
  return user.role === "admin" ? <AdminDashboard /> : <HomePage />;
};

export default RoleBasedRendering;
