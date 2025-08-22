import React from "react";
import { Navigate } from "react-router-dom";

// Simple authentication simulation
const isAuthenticated = false; // toggle to true to simulate login

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;