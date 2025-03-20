import React from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ProtectedLayout = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
