import React from "react";
import Happy from "../images/happy.svg";
import Button from "./Button";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className="container">
      <h1>This is my main page title</h1>
      <img src={Happy} alt="Happy" />
      <Button text="This is a button" />
      <Button text="This is also a button" />
      <Button text="Yep, this one too" />
      <Nav page="/secondpage" text="Go to second page" />
    </div>
  );
};

export default Main;
