import React from "react";
import { useState } from "react";
import SearchInput from "./SearchInput";
import SearchList from "./SearchList";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <SearchInput value={searchValue} setValue={setSearchValue} />
      <SearchList search={searchValue} />
    </div>
  );
};

export default Search;
