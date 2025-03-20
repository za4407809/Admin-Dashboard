import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav>
      <h2>Admin Panel</h2>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
