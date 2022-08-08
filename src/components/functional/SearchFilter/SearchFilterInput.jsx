import React from "react";

const SearchFilterInput = (props) => {
  const { type, value, setValue } = props;
  // console.log(props);

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

export default SearchFilterInput;
