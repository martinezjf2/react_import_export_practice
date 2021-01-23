import React from "react";
import ReactDOM from "react-dom";
import * as z from "./calculator";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png
// console.log(z);
ReactDOM.render(
  <ul>
    <li>{z.default.add(1, 2)}</li>
    <li>{z.default.multiply(2, 3)}</li>
    <li>{z.default.subtract(7, 2)}</li>
    <li>{z.default.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
