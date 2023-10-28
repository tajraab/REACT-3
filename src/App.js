import logo from "./logo.svg";
import react from "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Header from "./pages/Header/Header";
 import Homepage from "./pages/HomePage/HomePage";
 import PostPage from "./pages/PostPage/PostPage";
 import ProductPage from "./pages/ProductPage/ProductPage";
 import SinglePost from "./pages/SinglePost/SinglePost";
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
          <Route path="/" element={<PostsPage />} />
          <Route path="/posts/:id" element={<SinglePosts />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
