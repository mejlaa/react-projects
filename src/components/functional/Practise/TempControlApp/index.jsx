import React, { useState } from "react";
import "./temp.css";

const TempApp = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("tempCold");

  const increaseHandler = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;

    if (newTemp >= 15) setTempColor("tempHot");

    setTemp(newTemp);
  };

  const decreaseHandler = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;
    if (newTemp < 15) {
      setTempColor("tempCold");
    }
    setTemp(newTemp);
  };

  const resetBtnHandler = () => {
    setTemp(10);
    setTempColor("tempCold");
  };

  return (
    <div className="frame">
      <div className="frameDiv">
        <p className={`temperature ${tempColor}`}>{temp}℃</p>
        <div className="btnBox">
          <button className="btn" onClick={increaseHandler}>
            +
          </button>
          <button className="btn" onClick={decreaseHandler}>
            -
          </button>
        </div>
        <button className="resetBtn" onClick={resetBtnHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TempApp;
