import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://imgv3.fotor.com/images/blog-richtext-image/Image-Upscaler-2.jpg",
    },
    {
      name: "Product 2",
      price: 39.99,
      image: "https://www.product2.com/image.jpg",
    },
    {
      name: "Product 3",
      price: 49.99,
      image: "https://www.product3.com/image.jpg",
    },
  ];

  return (
    <div className="products-container">
      {products.map((item) => (
        <>
          <Product name={item.name} price={item.price} src={item.image} />
          {console.log(item.image)}
        </>
      ))}
    </div>
  );
};
export default Products;
