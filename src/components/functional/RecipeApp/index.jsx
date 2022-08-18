import React, { useEffect, useState } from "react";
import { recipeApi } from "../../../api/api";
import style from "./recipe.module.css";

const RecipeApp = () => {
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = async () => {
    try {
      const result = await recipeApi.get(
        `/api/recipes/v2?type=public&q=p&app_id=89985661&app_key=%200ffb8508cdf9897c2ebe8ad7465bef06`
      );
      const data = result.data;
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  console.log(recipe);

  return <div></div>;
};

export default RecipeApp;
