import React from "react";

const PSearchFilterInput = (props) => {
  const { value, setValue } = props;
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default PSearchFilterInput;
