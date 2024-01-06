import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");
  let changeTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#131313";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgba(255,255,255,0)";
      document.body.style.color = "#131313";
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar mode={mode} changeTheme={changeTheme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
