import React, { useState } from "react";
import "./regForm.css";

const RegForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const inputFirstNameHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const inputLastNameHandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const inputEmailHandler = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="box">
      <form className="inputs" onSubmit={submitHandler}>
        {submitted && valid ? (
          <p className="success-message">Success! Thank you for registering</p>
        ) : null}
        <input
          className="input"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={inputFirstNameHandler}
        />
        {submitted && !values.firstName ? (
          <span>Please enter a first name</span>
        ) : null}
        <input
          className="input"
          placeholder="Last name"
          name="lastName"
          value={values.lastName}
          onChange={inputLastNameHandler}
        />
        {submitted && !values.lastName ? (
          <span>Please enter a last name</span>
        ) : null}
        <input
          className="input"
          placeholder="E-mail"
          name="email"
          value={values.email}
          onChange={inputEmailHandler}
        />
        {submitted && !values.email ? (
          <span>Please enter a first name</span>
        ) : null}
        <button className="btn">Registar</button>
      </form>
    </div>
  );
};

export default RegForm;
