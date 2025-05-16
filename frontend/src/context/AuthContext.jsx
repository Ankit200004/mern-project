import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../services/authService.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile()
        .then((res) => setUser(res.user))
        .catch(logoutUser)
        .finally(() => setLoading(false)); // Must happen after getProfile
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logoutUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
