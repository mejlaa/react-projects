import React, { useState } from "react";
import style from "./index.css";

const TemperatureControl = () => {
  const [temp, setTemp] = useState(10);
  const [tempColor, setTempColor] = useState("tempCold");

  const increaseTemp = () => {
    if (temp === 30) return;
    const newTemp = temp + 1;

    if (newTemp >= 15) setTempColor("tempHot");

    setTemp(newTemp);
  };

  const decreaseTemp = () => {
    if (temp === 0) return;
    const newTemp = temp - 1;

    if (newTemp < 15) {
      setTempColor("tempCold");
    }

    setTemp(newTemp);
  };

  // const rangeHandler = () => {};
  return (
    <div className="frame">
      <div className="frameDiv">
        <p className={`temperature ${tempColor}`}>{temp}℃</p>
        <div className="btnBox">
          <button className="btn" onClick={increaseTemp}>
            +
          </button>
          <button className="btn" onClick={decreaseTemp}>
            -
          </button>
        </div>
        <button className="resetBtn" onClick={() => setTemp(10)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TemperatureControl;
