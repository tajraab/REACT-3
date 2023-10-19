import React from "react";
// import { useNavigate } from "react-router-dom";
import Posts from "../pages/Posts";
import Pages from "../pages/Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Navbar() {
  //   const navigate = useNavigate();
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Pages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
