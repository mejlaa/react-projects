import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const clearHandler = () => {
    setValue("");
  };

  const clickNumberHandler = (e) => {
    setValue(value.concat(e.target.value));
  };

  const clickOperationHandler = (e) => {
    // const op = value + e.target.value;
    setValue(value.concat(e.target.value));
  };

  const clickEqualHandler = (e) => {
    // setValue(result);
    setValue(eval(value).toString());
  };

  const delHandler = () => {
    setValue(value.slice(0, value.length - 1));
  };

  return (
    <div className="box">
      <div className="screen">
        <p>{value}</p>
      </div>
      <div className="btn-box">
        <div className="btn-row">
          <button value="7" onClick={clickNumberHandler} className="btn">
            7
          </button>
          <button value="8" onClick={clickNumberHandler} className="btn">
            8
          </button>
          <button value="9" onClick={clickNumberHandler} className="btn">
            9
          </button>
          <button
            value="/"
            onClick={clickOperationHandler}
            className="btn  btn-right"
          >
            /
          </button>
        </div>
        <div className="btn-row">
          <button value="4" onClick={clickNumberHandler} className="btn">
            4
          </button>
          <button value="5" onClick={clickNumberHandler} className="btn">
            5
          </button>
          <button value="6" onClick={clickNumberHandler} className="btn">
            6
          </button>
          <button
            value="*"
            onClick={clickOperationHandler}
            className="btn  btn-right"
          >
            *
          </button>
        </div>
        <div className="btn-row">
          <button value="1" onClick={clickNumberHandler} className="btn">
            1
          </button>
          <button value="2" onClick={clickNumberHandler} className="btn">
            2
          </button>
          <button value="3" onClick={clickNumberHandler} className="btn">
            3
          </button>
          <button
            value="+"
            onClick={clickOperationHandler}
            className="btn btn-right"
          >
            +
          </button>
        </div>
        <div className="btn-row">
          <button value="." onClick={clickNumberHandler} className="btn">
            .
          </button>
          <button value="0" onClick={clickNumberHandler} className="btn">
            0
          </button>
          <button value="=" onClick={clickEqualHandler} className="btn">
            =
          </button>
          <button
            value="-"
            onClick={clickOperationHandler}
            className="btn btn-right"
          >
            -
          </button>
        </div>
        <button onClick={clearHandler} className="btn-clear">
          Clear
        </button>
        <button className="btn btn-right" onClick={delHandler}>
          Del
        </button>
      </div>
    </div>
  );
};

export default Calculator;
