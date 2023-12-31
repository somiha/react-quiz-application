import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PublicRoute = () => {
  const { currentUser } = useAuth();

  return !currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoute;
