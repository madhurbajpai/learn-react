import React from "react";
import "./App5.css";
import Header from "./components/Header";
import { useState } from "react";

const App5 = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [field,setField] = useState(false);

  const handlerfirst = (event) => {
    setValues({...values, firstName: event.target.value});
  }

  const handlerlast = (event) => {
    setValues({...values, lastName: event.target.value});
  }

  const handleremail = (event) => {
    setValues({...values, email: event.target.value});
  }

  const handlersubmit = (event) => {
        event.preventDefault();
        if(values.firstName && values.lastName && values.email) setField(true);
        setSubmitted(true);
  }

  return (
    <>
      <Header head="Form Example" />
      <div className="form-main">
        {submitted && field? <div className="status">Form Submitted Successfully!</div> : null}
        <div className="form">
          <input
            className="name"
            type="text"
            placeholder="First Name"
            onChange={handlerfirst}
          />
          {submitted && !values.firstName ? <span className="errmesg">Please Enter First Name</span> : null}
          
          <input
            className="name"
            type="text"
            placeholder="Last Name"
            onChange={handlerlast}
          />
          {submitted && !values.lastName ? <span className="errmesg">Please Enter Last Name</span> : null}
          <input
            className="name"
            type="text"
            placeholder="Email"
            onChange={handleremail}
          />
          {submitted && !values.email ? <span className="errmesg">Please Enter Email</span> : null}
          <button className="reg" onClick={handlersubmit}>Register</button>
        </div>
      </div>
    </>
  );
};

export default App5;
