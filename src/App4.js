import React, { useState } from "react";
import "./App4.css";
import Header from "./components/Header";
import data from "./MOCK_DATA.json";

const App4 = () => {
  const [search, setsearch] = useState("");
  return (
    <div className="simple">
      <Header head="Search" />
      <input className="inp" type="text" placeholder="Search..." onChange={(event) => {
        setsearch(event.target.value);
      }}/>
      <div className="d">
        {data.filter((val) => {
            if(search == "") return val;
            else if(val.first_name.toLowerCase().includes(search.toLowerCase())) return val;
        }).map((val, key) => {
          return (
            <div className="data">
              <p>{val.first_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App4;
