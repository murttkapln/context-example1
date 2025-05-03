import { Outlet, Navigate } from "react-router-dom";

import { UseLoginContext } from "../context/LoginProvider";

const PrivateRouter = () => {
  const { user } = UseLoginContext();
  return user?.email && user?.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
