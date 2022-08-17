import React, { useState } from "react";
import SearchRecipeInput from "./searchInputRecipe";
import SearchRecipeList from "./searchListRecipe";

const SearchRecipe = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <SearchRecipeInput value={searchValue} setValue={setSearchValue} />
      <SearchRecipeList search={searchValue} />
    </div>
  );
};

export default SearchRecipe;
