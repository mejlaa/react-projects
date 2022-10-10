import React, { useState } from "react";
import "./temp.css";

const TempApp = () => {
  const [temp, setTemp] = useState(15);
  const [tempColor, setTempColor] = useState("tempCold");

  const increaseHandler = () => {
    setTemp(temp + 1);
  };

  const decreaseHandler = () => {
    setTemp(temp - 1);
  };

  const resetBtnHandler = () => {
    setTemp(15);
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
