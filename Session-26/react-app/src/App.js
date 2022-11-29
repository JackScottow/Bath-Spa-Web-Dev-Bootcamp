import "./App.css";
import Postcard from "./Components/Postcard";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div className={`App${darkmode ? " darkmode" : ""}`}>
      <button onClick={toggleDarkmode}>{`Change to ${darkmode ? "Light Mode" : "Dark Mode"}`}</button>

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
