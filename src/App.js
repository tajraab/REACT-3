import logo from "./logo.svg";
import react from "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
