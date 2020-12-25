import React from "react";
import ReactDOM from "react-dom";

const fName = "Patrick";
const lName = "Maloney";
const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <ul>
      <li>Bacon</li>
      <li>Mushrroms</li>
      <li>Jamon</li>
    </ul>
    <img className="food-img" alt="random" src={img} />
    <img
      className="food-img"
      alt="random"
      src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
    />

    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
