import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter() {
  return true ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRouter;
