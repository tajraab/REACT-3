import logo from "./logo.svg";
import react from "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Posts from "./pages/Posts";
import Header from "components/Header";
import ProductsPage from "./pages/ProductsPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
