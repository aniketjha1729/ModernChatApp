import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const UserPrivateRoute = () => {
  const { user } = useSelector((state) => state);
  return user.isAuthenticated && user.userAuthToken != null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
export default UserPrivateRoute;
