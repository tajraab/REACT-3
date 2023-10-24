import logo from "./logo.svg";
import react from "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./pages1/Posts/PostsPage";
import SinglePosts from "./pages1/SonglePosts/SinglePosts";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/posts" element={<SinglePosts />} />
          {/* <Route path="/products" element={<ProductsPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
