import { useState } from "react";

const Events = () => {
  const [cats, setCats] = useState(["Tom", "jerry", "minx"]);
  function AddCats(newCat) {
    let input = document.getElementById("cat");
    newCat = input.value;
    setCats((arr) => {
      return [...arr, newCat];
    });
  }
  return (
    <div className="events">
      {cats.map((cat, i) => {
        return <p key={i}>The cat is called {cat}</p>;
      })}
      <input type="text" id="cat" placeholder="add a cat" onChange={this}></input>
      <button onClick={AddCats}>Cats</button>
    </div>
  );
};

export default Events;
