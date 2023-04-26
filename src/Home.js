import "./Home.css";
import React from "react";
import Header from "./components/Header";
import HCard from "./components/HCard";

const Home = () => {
  return (
    <div className="home-main">
      <Header head="Home Menu" />
      <div className="cards-col">
        <HCard
          title="Record Keeping"
          desc="In this app we will make an applicaton which keeps the records entered
          by the users"
        />
        <HCard
          title="useState Hook"
          desc="In this app we are looking for the example of useState Hook"
        />
        <HCard
          title="Temperature Color"
          desc="In this app we are making a card which changes color as temperature is altered"
        />
        <HCard
          title="Search App"
          desc="In this app we are looking an application for search"
        />
        <HCard
          title="Simple Form"
          desc="In this we are looking a simple form"
        />
        <HCard
          title="Quiz App"
          desc="In this app we making a simple quiz application"
        />
      </div>
    </div>
  );
};

export default Home;
