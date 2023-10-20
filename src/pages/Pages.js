import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Pages() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "20px",
        justifyContent: "center",
        marginRight: "20px",
        padding: "50px",
        backgroundColor: "grey",
      }}
    >
      <button onClick={() => navigate("/posts")}>POSTS</button>
      <button onClick={() => navigate("/")}>PAGE</button>
    </div>
  );
}

export default Pages;
//za domaci napraviti tri foldera za css,tri za js
