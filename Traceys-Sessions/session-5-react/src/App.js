import "./App.css";
import "./css/Main.css";
import Main from "./components/Main";
import SecondPage from "./components/SecondPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./components/Cat";
import { useState } from "react";

function App() {
  const [first, setfirst] = useState(true);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/secondpage" element={<SecondPage />}></Route>
          <Route path="/cat" element={<Events />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
