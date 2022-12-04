import React from "react";
import Happy from "../images/happy.svg";
import Button from "./Button";
import Nav from "./Nav";

const SecondPage = () => {
  return (
    <div className="container">
      <h1>This is my second page title</h1>
      <img src={Happy} alt="Happy" />
      <Button text="This is a button" />
      <Button text="This is also a button" />
      <Button text="Yep, this one too" />
      <Nav page="/" text="Back to main page" />
    </div>
  );
};

export default SecondPage;
