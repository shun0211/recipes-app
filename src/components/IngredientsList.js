import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ list = [] }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}

{/* 
<Ingredient {...ingredient} />は以下の記述と同義
<Ingredient
  amount={1}
  measurement="lb"
  name="Salmon"
/>
*/}