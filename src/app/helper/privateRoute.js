import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { customRoutes } from "../routes/routes";

export const PrivateRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.authentication);
  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={customRoutes.adminLogin.path} />;
  }
};
