import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button onClick={() => props.addToCart(props.name, props.price)}>Add to Cart</button>
    </div>
  );
};

export default Product;
