import React, { useState } from "react";
import SearchInput from "./searchInput";
import SearchL from "./searchList";

const SearchF = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <SearchInput value={searchValue} setValue={setSearchValue} />
      <SearchL search={searchValue} />
    </div>
  );
};

export default SearchF;
