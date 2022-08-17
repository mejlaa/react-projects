import React, { useState } from "react";
import "./contact.css";

const ContactCard = (props) => {
  let { img, name, email, age } = props;
  const [showAge, setShowAge] = useState(false);

  const showAgeHandler = () => {
    setShowAge(!showAge);
  };

  return (
    <div className="contact-card">
      <img src={props.img} />
      <div className="contact-content">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={showAgeHandler}>Show Age</button>
        {showAge ? <p>{props.age}</p> : null}
      </div>
    </div>
  );
};

export default ContactCard;
