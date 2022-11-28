import "./App.css";
import Postcard from "./Components/Postcard";

function App() {
  return (
    <div className="App">
      <Postcard imageSrc={require("./Components/img/taj-mahal.jpg")} title="Taj Mahal" text="From India with love!" />
      <Postcard imageSrc={require("./Components/img/mount-rushmore.jpg")} title="Mount Rushmore" text="Wow they're big!" />
      <Postcard imageSrc={require("./Components/img/trafalgar-square.jpg")} title="Trafalgar Square" text="So. Many. Pigeons!" />
    </div>
  );
}

export default App;
