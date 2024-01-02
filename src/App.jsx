import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Product />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
