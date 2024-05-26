import "./App.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Products from "./components/Products";
import productsData from "./components/ProductsData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchResult from "./components/SearchResult";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [data, setData] = useState([...productsData]);
  const [cart, setCart] = useState([]);
  return (
    <main className="min-h-screen flex flex-col">
      <Router>
        <Navbar setData={setData} cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Products productsdata={data} cart={cart} setCart={setCart} />
            }
          />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="search/:term" element={<SearchResult />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
