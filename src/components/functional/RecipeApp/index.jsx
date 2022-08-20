import React, { useEffect, useState } from "react";
import { recipeApi } from "../../../api/api";
import style from "./recipe.module.css";
import RecipeCard from "./recipeCard";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const result = await recipeApi.get(
        `/api/recipes/v2?type=public&q=p&app_id=89985661&app_key=%200ffb8508cdf9897c2ebe8ad7465bef06`
      );
      const data = result.data;
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  console.log(recipes);

  return <div></div>;
};

export default RecipeApp;
