import React, { useState } from "react";

const PSimpleCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(0)}>reset</button>
      <button onClick={(e) => setValue(value - 1)}>-</button>
    </div>
  );
};

export default PSimpleCounter;
