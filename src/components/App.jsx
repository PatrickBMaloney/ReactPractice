import React from "react";
// import Heading from "./Heading";
// import List from "./List";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

// const fName = "Patrick";
// const lName = "Maloney";
const currentDate = new Date();
const year = currentDate.getFullYear();
// const currentTime = currentDate.getHours();
// const img = "https://picsum.photos/200";

// const customStyle = {
//   color: ""
// };

// let greeting;
// if (currentTime < 12) {
//   customStyle.color = "red";
//   greeting = "Good Morning";
// } else if (currentTime < 18) {
//   customStyle.color = "green";
//   greeting = "Good Afternoon";
// } else {
//   customStyle.color = "blue";
//   greeting = "Good Evening";
// }
const createCard = (contact) => {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
};

function App() {
  return (
    <div>
      {/* <Heading
        styling={customStyle}
        greeting={greeting}
        fName={fName}
        lName={lName}
      /> */}

      <div>
        <h1 className="heading">My Contacts</h1>
        <Avatar
          img="https://avatars2.githubusercontent.com/u/37421561?s=460&u=445dfc79012821f9da38cf228db571b896954c53&v=4"
          alt="Patrick"
        />
        {contacts.map(createCard)}
      </div>

      <footer>Copyright {year}</footer>
    </div>
  );
}

export default App;
