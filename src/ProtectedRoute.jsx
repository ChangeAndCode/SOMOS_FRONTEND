
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("token");

  if (loading) return <p>Cargando sesión...</p>;

  if (!user && !token && !loading) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
