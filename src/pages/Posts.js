import React from "react";
import { useNavigate } from "react-router-dom";
function Posts() {
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
      <button onClick={() => navigate("/")}>PAGE</button>
      <button onClick={() => navigate("/posts")}>POSTS</button>
      <h1>t</h1>
    </div>
  );
}

export default Posts;
