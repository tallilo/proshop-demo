import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

function AdminRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default AdminRoute;
