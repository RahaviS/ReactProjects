import React from "react";
import ReactDOM from "react-dom";

const name = "Rahavi";
const luckyNo = "15";

ReactDOM.render(
  <div>
    <h1> Hello {name} </h1>
    <p>My Lucky number is {luckyNo} </p>
    <p>My Random Number is {Math.floor(Math.random() * 10)} </p>
  </div>,
  document.getElementById("root")
);
