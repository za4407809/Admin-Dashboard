import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/users">Users</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
