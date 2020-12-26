import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardtop">
        <h2>{props.name}</h2>
        <Avatar img={props.img} alt={props.name} />
      </div>
      <div className="card-bottom">
        <Detail detailInfo={props.phone} />
        <Detail detailInfo={props.phone} />
      </div>
    </div>
  );
};

export default Card;
