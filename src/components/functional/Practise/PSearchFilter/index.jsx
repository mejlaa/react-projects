import React, { useState } from "react";
import PSearchFilterInput from "./indexInput";
import PSearchFilterList from "./indexList";

const PSearchFilter = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <PSearchFilterInput value={searchValue} setValue={setSearchValue} />
      <PSearchFilterList search={searchValue} />
    </div>
  );
};

export default PSearchFilter;
