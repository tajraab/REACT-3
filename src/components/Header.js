import React from "react";
import "style.css";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div>
        <div className="pages">
          <NavLink
            to={"/posts"}
            className={({ isActive }) => (isActive ? "active" : "unActive")}
          >
            Products
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
