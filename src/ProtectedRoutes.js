import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";

const ProtectedRoutes = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      {auth.isLoggedIn ? <Outlet /> : <Navigate to="/auth" />}
    </>
  );
};

export default ProtectedRoutes;
