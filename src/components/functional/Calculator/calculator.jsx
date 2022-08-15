import React from "react";
import "./calculator.css";

const Calculator = () => {
  return (
    <div className="box">
      <div className="screen">
        <p>jshjhd</p>
      </div>
      <div className="btn-box">
        <div className="btn-row">
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn  btn-right">/</button>
        </div>
        <div className="btn-row">
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn  btn-right">*</button>
        </div>
        <div className="btn-row">
          <button className="btn">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn btn-right">+</button>
        </div>
        <div className="btn-row">
          <button className="btn">.</button>
          <button className="btn">0</button>
          <button className="btn">=</button>
          <button className="btn btn-right">-</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
