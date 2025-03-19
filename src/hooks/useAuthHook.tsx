import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  CLIENT_ID,
  AUTH_SERVER_URL,
  AUTH_UI_URL,
  REDIRECT_URL,
} from "../../config";

interface User {
  name: string;
  email: string;
  avatar?: string;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  const redirectToAuthorize = () => {
    setIsAuthenticated(false);
    setUser(null);
    const currentPath = location.pathname;
    window.location.href = `${AUTH_SERVER_URL}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&state=${encodeURIComponent(
      currentPath
    )}`;
  };

  const logout = async () => {
    try {
      console.log("useAuth - Logging out...");
      await axios.post(
        `${AUTH_SERVER_URL}/logout`,
        {},
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      setUser(null);
      console.log("useAuth - Logout successful, redirecting to login...");
      window.location.href = `${AUTH_UI_URL}/login?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;
    } catch (err: any) {
      console.error(
        "useAuth - Logout failed:",
        err.response?.data || err.message
      );
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${AUTH_SERVER_URL}/userInfo`, {
          withCredentials: true,
        });
        console.log("useAuth - userInfo response:", response.data);
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (err: any) {
        console.error(
          "useAuth - userInfo failed:",
          err.response?.data || err.message
        );
        setUser(null);
        if (location.pathname !== "/callback") {
          redirectToAuthorize();
        } else {
          console.log("useAuth - On /callback, skipping redirect");
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [location.pathname]);

  return { isAuthenticated, error: null, logout, user, loading };
};
