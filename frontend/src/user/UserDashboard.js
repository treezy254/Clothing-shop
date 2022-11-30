import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { signout } from "../auth/helper";

const UserDashboard = () => {
  return (
    <div title="User dashboard">
      <h1>Welcome to user dashboard page</h1>
      <p><Link to="logout">Log out</Link></p>
    </div>
  );
};

export default UserDashboard;
