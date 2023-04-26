import { useNavigate } from "react-router-dom";
import "../Home.css";
import React from "react";

const HCard = (props) => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="one-card">
        <span className="title">{props.title}</span>
        <div className="desc">{props.desc}</div>
          <button className="rout" onClick={() => navigate(`${props.loc}`)}>Go to the app</button>
      </div>
    </>
  );
};

export default HCard;
