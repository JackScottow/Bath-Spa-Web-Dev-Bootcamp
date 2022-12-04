import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  const handleClick = (e) => {
    console.log(e.target.innerText);
  };
  return <button onClick={(e) => handleClick(e)}>{text}</button>;
};

export default Button;
