import "../Home.css";
import React from "react";

const HCard = (props) => {
  return (
    <>
      <div className="one-card">
        <span className="title">{props.title}</span>
        <div className="desc">{props.desc}</div>
          <button className="rout">Go to the app</button>
      </div>
    </>
  );
};

export default HCard;
