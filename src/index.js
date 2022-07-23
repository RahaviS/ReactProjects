import React from "react";
import ReactDOM from "react-dom";

const name = "Rahavi";
const luckyNo = "15";

ReactDOM.render(
  <div>
    <h1> Hello {name} </h1>
    <p>My Lucky number is {luckyNo} </p>
  </div>,
  document.getElementById("root")
);
