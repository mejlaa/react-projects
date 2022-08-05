import React from "react";
import { useState } from "react";

const SimpleCounter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>increase</button>
      <button onClick={() => setValue(0)}>reset</button>
      <button onClick={() => setValue(value - 1)}>decrease</button>
    </div>
  );
};

export default SimpleCounter;
