import React from "react";
import Product from "./Product";

const Products = () => {
  var products = [
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeBWbUzMBWOfgItK9m0ogS6CABTqrlH6fiqqx9IDmtmTmN994we7q7wSp4e04OVMbCABqhGAR6USWAxDcyda8yMucoL3T2dLG83KsEY6PPOf7XjmZ-IuZEhbMW_pJ7ZzbpBc0w.jpg?r=6f5",
    },
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeBWbUzMBWOfgItK9m0ogS6CABTqrlH6fiqqx9IDmtmTmN994we7q7wSp4e04OVMbCABqhGAR6USWAxDcyda8yMucoL3T2dLG83KsEY6PPOf7XjmZ-IuZEhbMW_pJ7ZzbpBc0w.jpg?r=6f5",
    },
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeBWbUzMBWOfgItK9m0ogS6CABTqrlH6fiqqx9IDmtmTmN994we7q7wSp4e04OVMbCABqhGAR6USWAxDcyda8yMucoL3T2dLG83KsEY6PPOf7XjmZ-IuZEhbMW_pJ7ZzbpBc0w.jpg?r=6f5",
    },
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeBWbUzMBWOfgItK9m0ogS6CABTqrlH6fiqqx9IDmtmTmN994we7q7wSp4e04OVMbCABqhGAR6USWAxDcyda8yMucoL3T2dLG83KsEY6PPOf7XjmZ-IuZEhbMW_pJ7ZzbpBc0w.jpg?r=6f5",
    },
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeBWbUzMBWOfgItK9m0ogS6CABTqrlH6fiqqx9IDmtmTmN994we7q7wSp4e04OVMbCABqhGAR6USWAxDcyda8yMucoL3T2dLG83KsEY6PPOf7XjmZ-IuZEhbMW_pJ7ZzbpBc0w.jpg?r=6f5",
    },
    {
      name: "Rambo",
      price: 29.99,
      image:
        "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeBWbUzMBWOfgItK9m0ogS6CABTqrlH6fiqqx9IDmtmTmN994we7q7wSp4e04OVMbCABqhGAR6USWAxDcyda8yMucoL3T2dLG83KsEY6PPOf7XjmZ-IuZEhbMW_pJ7ZzbpBc0w.jpg?r=6f5",
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
