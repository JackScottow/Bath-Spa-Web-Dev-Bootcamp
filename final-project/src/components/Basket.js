import React from "react";
import { Link } from "react-router-dom";
import "../Css/Basket.css";

const Basket = ({ basket }) => {
  let basketQty = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
  });

  console.log(basket);
  return (
    <div className="basket-container">
      {basket.length > 0
        ? basket.map((item) => (
            <div className="basket-item" key={item.id}>
              <p>
                <img src={`https://www.themoviedb.org/t/p/w92${item.image}`} />
                <Link to={`/movie/${item.title.split(" ").join("")}`} key={item.id} state={item.id}>
                  {item.title} ({item.id})
                </Link>
              </p>
              <p>
                Quantity: {item.qty}
                <br />
                Price £{item.price}
                <br />
                Total Cost: £{(item.qty * item.price).toFixed(2)}
              </p>
            </div>
          ))
        : "Cart is empty"}
      <p className="basket-total">Total : £{(basketQty * 2.99).toFixed(2)}</p>
    </div>
  );
};

export default Basket;
