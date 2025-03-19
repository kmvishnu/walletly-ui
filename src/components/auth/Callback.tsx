import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, AUTH_SERVER_URL } from "../../../config";

const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get("code");
      const state = params.get("state");

      if (!code) {
        console.error("Callback - No code found");
        setError("Invalid callback: No code provided.");
        return;
      }

      try {
        await axios.post(
          `${AUTH_SERVER_URL}/token`,
          { code, client_id: CLIENT_ID, client_secret: CLIENT_SECRET },
          { withCredentials: true }
        );
        navigate(state || "/");
      } catch (err: any) {
        console.error(
          "Callback - Token exchange failed:",
          err.response?.data || err.message
        );
        setError("Failed to process login. Please try again.");
      }
    };

    handleCallback();
  }, [navigate, location.search]);

  return <div>{error || "Processing login..."}</div>;
};

export default Callback;
