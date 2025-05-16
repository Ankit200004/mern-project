// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import PublicRoute from "./router/PublicRoute";
import PrivateRoute from "./router/PrivateRoute";
import RoleRoute from "./router/RoleRoute";

import Default from "./pages/auth/Default";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import RoleBasedRendering from "./components/RoleBasedRendering";
import ProductUpload from "./pages/admin/ProductUpload";
import Orders from "./pages/admin/Orders";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public pages */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Default />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* Dashboard: any authenticated user */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<RoleBasedRendering />} />
          </Route>

          {/* Admin-only pages */}
          <Route element={<RoleRoute roles={["admin"]} />}>
            <Route path="/product-upload" element={<ProductUpload />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
