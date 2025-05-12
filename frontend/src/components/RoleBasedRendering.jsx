import { useAuth } from "../context/AuthContext";
import HomePage from "../pages/user/Home";
import AdminHome from "../pages/admin/AdminHome";

const ReeBasedRendering = () => {
  const { user } = useAuth();

  if (!user) return null;

  return user.role === "admin" ? <AdminHome /> : <HomePage />;
};

export default ReeBasedRendering;
