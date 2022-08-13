import React, { useState } from "react";
import "./tempControl.css";

const TempControlApp = () => {
  const [temp, setTemp] = useState(10);
  const [backColor, setBackColor] = useState("tempCold");

  const increaseHandler = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;
    if (newTemp >= 15) setBackColor("tempHot");
    setTemp(newTemp);
  };

  const decreaseHandler = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;
    if (newTemp <= 15) setBackColor("tempCold");
    setTemp(newTemp);
  };

  return (
    <div>
      <span className={backColor}>{temp}</span>
      <button onClick={increaseHandler}>+</button>
      <button onClick={decreaseHandler}>-</button>
      {/* <button></button> */}
    </div>
  );
};

export default TempControlApp;
