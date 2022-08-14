import React from "react";

const Logout = (props) => {
  return (
    <button className="btn" onClick={props.set(true)}>
      Logout
    </button>
  );
};

export default Logout;
