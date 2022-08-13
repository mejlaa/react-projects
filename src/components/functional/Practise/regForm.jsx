import React, { useState } from "react";

const RegForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const firstNameHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const emailHandler = (e) => {
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
    <div>
      {submitted && valid ? <p>Success! Thank you for registering</p> : null}
      <form>
        <input
          name="firstName"
          placeholder="First name"
          value={values.firstName}
          onChange={firstNameHandler}
        />
        {submitted && !values.firstName ? (
          <p>Please enter a first name</p>
        ) : null}
        <input
          name="lastName"
          placeholder="Last name"
          value={values.lastName}
          onChange={lastNameHandler}
        />
        {submitted && !values.lastName ? <p>Please enter a last name</p> : null}
        <input
          name="email"
          placeholder="E-mail address"
          value={values.email}
          onChange={emailHandler}
        />
        {submitted && !values.email ? <p>Please enter an email</p> : null}
        <button onClick={submitHandler}>Registar</button>
      </form>
    </div>
  );
};

export default RegForm;
