import React from "react";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./homepage-icon-free-vector.jpg";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <img
          src={Logo}
          style={{ cursor: "pointer" }}
          height={60}
          onClick={() => navigate("/")}
        />
      </div>
      <div className="pages">
        <NavLink
          to={"/posts"}
          className={({ isActive }) => (isActive ? "active" : "unActive")}
        >
          Posts
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? "active" : "unActive")}
        >
          Products
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
