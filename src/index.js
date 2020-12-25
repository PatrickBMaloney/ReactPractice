import React from "react";
import ReactDOM from "react-dom";

const fName = "Patrick";
const lName = "Maloney";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <ul>
      <li>Bacon</li>
      <li>Mushrroms</li>
      <li>Jamon</li>
    </ul>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
