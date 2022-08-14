import React, { useState } from "react";
import "./loginApp.css";

const Login = (props) => {
  const [values, setValues] = useState({ userName: "", password: "" });
  const [isActive, setIsActive] = useState(true);
  const [valid, setValid] = useState(false);

  const inputUserNameHandler = (e) => {
    setValues({ ...values, userName: e.target.value });
  };

  const inputPasswordHandler = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    setIsActive(false);
  };

  const logoutSubmitHandler = (e) => {
    e.preventDefault();
    setIsActive(true);
  };

  return (
    <div className="box">
      {isActive ? (
        <div>
          <form className="inputs">
            <input
              className="input"
              type="text"
              placeholder="User name"
              value={values.userName}
              onChange={inputUserNameHandler}
            />
            {!isActive && !values.userName ? (
              <span>Please enter an username</span>
            ) : null}
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={inputPasswordHandler}
            />
            {!isActive && !values.password ? (
              <span>Please enter a password</span>
            ) : null}
            <button className="btn" onClick={loginSubmitHandler}>
              Login
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p>User name: {values.userName}</p>
          <p>Password: {values.password}</p>
          <button className="btn" onClick={logoutSubmitHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
