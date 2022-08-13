import React from "react";

const SearchInput1 = (props) => {
  const { text, value, setValue } = props;

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput1;
