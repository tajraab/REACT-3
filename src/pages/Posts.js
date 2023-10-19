import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
function Posts() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        marginRight: "20px",
        padding: "50px",
        backgroundColor: "pink",
        width: "100%",
      }}
    >
      <button onClick={() => navigate("/")}> idi na PAGE</button>
      <button onClick={() => navigate("/posts")}>idi na POSTS</button>
      <h1></h1>
    </div>
  );
}

export default Posts;
