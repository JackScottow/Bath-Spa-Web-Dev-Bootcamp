import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <div>
        <img src={props.src} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      {console.log(props)}
    </div>
  );
};

export default Product;
