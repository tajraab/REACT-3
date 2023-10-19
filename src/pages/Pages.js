import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Pages() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>THIS IS ABOUT US PAGE</h1>
      <button onClick={() => navigate("/posts")}>ABOUT</button>
    </div>
  );
}

export default Pages;
