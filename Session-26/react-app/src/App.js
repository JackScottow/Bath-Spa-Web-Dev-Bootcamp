import "./App.css";
import Postcard from "./Components/Postcard";
import { useState } from "react";
import Button from "./Components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className={`App${darkmode ? " darkmode" : ""}`}>
      <br />
      <Button
        padding="1rem"
        bgColor={darkmode ? "#111" : "#FFF"}
        textColor={darkmode ? "#FFF" : "#111"}
        border={darkmode ? "1px solid white" : "1px solid #111"}
        borderRad=".5rem"
        fontSize="3rem"
        onClick={toggleDarkmode}
      >
        {`${darkmode ? "Light Mode" : "Dark Mode"}`}
      </Button>

      <Postcard imageSrc={require("./Components/img/taj-mahal.jpg")} title="Taj Mahal" text="From India with love!" isDarkmode={darkmode} />

      <Postcard imageSrc={require("./Components/img/mount-rushmore.jpg")} title="Mount Rushmore" text="Wow they're big!" isDarkmode={darkmode} />

      <Postcard
        imageSrc={require("./Components/img/trafalgar-square.jpg")}
        title="Trafalgar Square"
        text="So. Many. Pigeons!"
        isDarkmode={darkmode}
      />
    </div>
  );
}

export default App;
