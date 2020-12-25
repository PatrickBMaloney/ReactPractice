import React from "react";
import ReactDOM from "react-dom";

const fName = "Patrick";
const lName = "Maloney";
const currentDate = new Date();
const year = currentDate.getFullYear();
const currentTime = currentDate.getHours();
const img = "https://picsum.photos/200";

const customStyle = {
  color: "",
  fontSize: "20px",
  border: "1px solid black"
};

let greeting;
if (currentTime < 12) {
  customStyle.color = "red";
  greeting = "Good Morning";
} else if (currentTime < 18) {
  customStyle.color = "green";
  greeting = "Good Afternoon";
} else {
  customStyle.color = "blue";
  greeting = "Good Evening";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>
      {greeting} {fName + " " + lName}!
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    <ul>
      <li>Bacon</li>
      <li>Mushrroms</li>
      <li>Jamon</li>
    </ul>
    <img className="food-img" alt="random" src={img} />
    <img
      className="food-img"
      alt="dog"
      src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
    />

    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
