import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Product />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
