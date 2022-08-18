import React, { useEffect, useState } from "react";
import { recipeApi } from "../../../api/api";
import style from "./recipe.module.css";

const RecipeApp = () => {
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = async () => {
    try {
      const result = await recipeApi.get(`/api/nutrition-data`);
      const data = result.data;
      setRecipe(data.result);
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
