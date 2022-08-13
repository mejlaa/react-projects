import React, { useState } from "react";

const SimpleCounter1 = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <button onClick={() => setValue(0)}>reset</button>
    </div>
  );
};

export default SimpleCounter1;
