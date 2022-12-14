import React from "react";
import { Link } from "react-router-dom";
import "../Css/Basket.css";
import { Button } from "react-bootstrap";

const Basket = ({ basket, plusQty, minusQty, clearBasket }) => {
  let basketQty = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
  });

  return (
    <div className="basket-container">
      {basket.length > 0
        ? basket.map((item, i) => (
            <div className="basket-item" key={item.id}>
              <p>
                <img src={`https://www.themoviedb.org/t/p/w92${item.image}`} alt={item.title} />
                <Link to={`/movie/${item.title.split(" ").join("")}`} key={item.id} state={item.id}>
                  {item.title} ({item.id})
                </Link>
              </p>
              <p>
                Price £{item.price}
                &nbsp;
                <br />
                <Button variant="danger" onClick={() => minusQty(item)}>
                  -
                </Button>
                &nbsp;
                <input type="text" value={item.qty} readonly className="qty" />
                &nbsp;
                <Button variant="success" onClick={() => plusQty(item)}>
                  <div>+</div>
                </Button>
                <br />
                Total Cost: £{(item.qty * item.price).toFixed(2)}
              </p>
            </div>
          ))
        : "Cart is empty"}
      {basket.length > 0 ? (
        <Button variant="danger" onClick={() => clearBasket()} className="empty-basket">
          Empty Basket
        </Button>
      ) : (
        ""
      )}
      <p className="basket-total">Total : £{(basketQty * 2.99).toFixed(2)}</p>
    </div>
  );
};

export default Basket;
