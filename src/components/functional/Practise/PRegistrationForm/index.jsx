import React, { useState } from "react";

const PRegForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={submitHandler}>
        <input
          className="form-field"
          placeholder="First name"
          name="firstName"
          value={values.firstName}
          onChange={firstNameHandler}
        />
        <input
          className="form-field"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={lastNameHandler}
        />
        <input
          className="form-field"
          placeholder="Email"
          name="name"
          value={values.email}
          onChange={emailHandler}
        />
        <button className="btn">register</button>
      </form>
    </div>
  );
};

export default PRegForm;
