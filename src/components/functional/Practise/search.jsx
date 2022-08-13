import React, { useState } from "react";
import SearchInput1 from "./searchInput";
import SearchList1 from "./searchList";
const SearchFilter1 = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <SearchInput1 value={searchValue} setValue={setSearchValue} />
      <SearchList1 search={searchValue} />
    </div>
  );
};

export default SearchFilter1;
