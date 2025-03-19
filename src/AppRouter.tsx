import { Routes, Route, Navigate } from "react-router-dom";
import HomeComponent from "./components/Home/HomeComponent";
import Callback from "./components/auth/Callback";
import { useAuth } from "./hooks/useAuthHook";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, error } = useAuth();
  if (isAuthenticated === null) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return isAuthenticated ? <>{children}</> : null;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomeComponent />
          </PrivateRoute>
        }
      />
      <Route path="/callback" element={<Callback />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
