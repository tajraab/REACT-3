import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcomeContainer">
      <h1>WELCOME TO MY HOME PAGE</h1>
      <div>
        <h3>This page contains posts and products </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
            // fontFamily:
            //   "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
          }}
        >
          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "20px 30px",
              backgroundColor: "lightblue",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            PRODUCTS
          </button>
          <p>or</p>
          <button
            onClick={() => navigate("/posts")}
            style={{
              padding: "20px 30px",
              backgroundColor: "lightblue",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            POSTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
