import React from "react";

const SearchRecipeList = (props) => {
  const { search } = props;

  const list = [
    { name: "Mejla Ugljanin", age: 27 },
    { name: "Majda Ugljanin", age: 58 },
  ];

  const searchRecipe = list.filter((recipe) => {
    if (search === "") return false;
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {searchRecipe.map((recipe) => {
        return <div>{recipe.name}</div>;
      })}
    </div>
  );
};

export default SearchRecipeList;
