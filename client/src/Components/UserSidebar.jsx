import React from "react";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <div className="left-bar">
        <div className="dashboard-sidebar">
          <ul>
            <li>
              <NavLink to="/dashboard">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/">Setting</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/password">Change Password</NavLink>
            </li>
            <li>
              <NavLink to="/">User</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
