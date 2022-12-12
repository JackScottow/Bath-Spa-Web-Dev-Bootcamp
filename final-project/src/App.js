import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./Layouts/Main";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import React from "react";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./components/Popular";
import Genre from "./components/Genre";
import Movie from "./components/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/genre/:genre" element={<Genre />} />
          <Route path="/movie/:movie" element={<Movie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
