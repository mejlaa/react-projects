import React from "react";
import style from "./recipe.module.css";

const RecipeCard = (props) => {
  const { name, kCal, img, recipe } = props;

  return (
    <div className={style.box}>
      <div className={style.card}>
        <div className={style.cardContent}>
          <p>Name: {props.name}</p>
          <p>Calories: {props.kCal}</p>
          <p>Recipe: {props.recipe}</p>
        </div>
        <div className={style.cardImg}></div>
      </div>
    </div>
  );
};

export default RecipeCard;
