import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layouts/main";
import { Contact } from "./Pages/Contact";
import { useState } from "react";
import DashboardLayout from "./Layouts/dashboard";
import Dashboard from "./Pages/Dashboard.js";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="contact" index element={<Contact />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// rafce
