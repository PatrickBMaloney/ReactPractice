import React from "react";
import Heading from "./Heading";
import List from "./List";
import Card from "./Card";

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

function App() {
  return (
    <div>
      <Heading
        styling={customStyle}
        greeting={greeting}
        fName={fName}
        lName={lName}
      />
      <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
      <List />
      <img className="food-img" alt="random" src={img} />
      <img
        className="food-img"
        alt="dog"
        src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
      />

      <h1>My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />

      <p>Copyright {year}</p>
    </div>
  );
}

export default App;
