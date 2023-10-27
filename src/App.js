import logo from "./logo.svg";
import react from "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsPage from "./pages/Posts/PostsPage";
import SinglePosts from "./pages/SinglePosts/SinglePosts";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<SinglePosts />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
