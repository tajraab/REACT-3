import logo from "./logo.svg";
import react from "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Header from "./pages/Header/Header";
import Homepage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SinglePost from "./pages/SinglePost";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import react from "./Header.css";
import react from "./PostPage.css";
import react from "./HomePage.css";
import Footer from "./Footer/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
