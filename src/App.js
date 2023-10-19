import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element="Pages"></Route>
        </Routes>
      </BrowserRouter>
      <Navbar />
    </div>
  );
}

export default App;
