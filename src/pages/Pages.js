import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Pages() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "right",
        marginRight: "50px",
      }}
    >
      <button onClick={() => navigate("/posts")}>POSTS</button>
      <button onClick={() => navigate("/")}>PAGE</button>
    </div>
  );
}

export default Pages;
