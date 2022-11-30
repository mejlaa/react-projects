import React, { useState } from "react";
import style from "./style.css";

const PTempControl = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("tempCold");

  const increaseTempHandler = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;

    if (newTemp > 15) {
      setTempColor("tempHot");
    }

    setTemp(newTemp);
  };

  const decreaseTempHandler = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;

    if (newTemp <= 15) setTempColor("tempCold");

    setTemp(newTemp);
  };

  const resetTempHandler = () => {
    setTemp(10);
  };

  return (
    <div className="box">
      <div className={`tempDisplay ${tempColor}`}>{temp}℃</div>
      <div className="btnBox">
        <button className="btn" onClick={increaseTempHandler}>
          +
        </button>
        <button className="btnReset" onClick={resetTempHandler}>
          Reset
        </button>
        <button className="btn" onClick={decreaseTempHandler}>
          -
        </button>
      </div>
    </div>
  );
};

export default PTempControl;
