import React, { useState } from "react";
import SearchFilterInput from "./SearchFilterInput";
import SearchFilterList from "./SearchFilterList";

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <SearchFilterInput value={searchValue} setValue={setSearchValue} />
      <SearchFilterList search={searchValue} />
    </div>
  );
};

export default SearchFilter;
