import React, { useState } from "react";
import "./registrationForm.css";

const RegistrationFormInput = () => {
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
        {submitted ? (
          <p className="success-message">Success! Thank you for registering</p>
        ) : null}
        <input
          className="input"
          type="text"
          placeholder="First name"
          value={values.firstName}
          onChange={inputFirstNameHandler}
        />
        {submitted && valid ? <span>Please enter a first name</span> : null}
        <input
          className="input"
          type="text"
          placeholder="Last name"
          value={values.lastName}
          onChange={inputLastNameHandler}
        />
        {submitted && valid ? <span>Please enter a first name</span> : null}
        <input
          className="input"
          type="email"
          placeholder="E-mail"
          value={values.email}
          onChange={inputEmailHandler}
        />
        {submitted && valid ? <span>Please enter a first name</span> : null}
        <button className="btn">Registar</button>
      </form>
    </div>
  );
};

export default RegistrationFormInput;
