import React from "react";

const Heading = (props) => {
  return (
    <h1 className="heading" style={props.styling}>
      {props.greeting} {props.fName + " " + props.lName}!
    </h1>
  );
};

export default Heading;
