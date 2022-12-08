import "./App.css";

import Layout from "./Layouts/Main";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import React from "react";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
