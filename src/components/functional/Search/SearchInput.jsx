import React from "react";

const SearchInput = (props) => {
  const { type, value, setValue } = props;

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

export default SearchInput;
