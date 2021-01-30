import React from "react";

import Pizza from "../../assets/pizza.jpg";
import Burger from "../../assets/burger.jpg";

import "./recipe.styles.scss";

const Recipe = () => (
  <div className="recipe">
    <div className="upper">
      <h1>Recipes for You</h1>
      <a href="#">See All</a>
    </div>
    <div className="recipe-list">
      <div className="recipe-item">
        <div className="recipe-image">
          <img src={Burger} alt="Burger" />
        </div>
        <h1>Burger</h1>
        <h5>30 Recipes</h5>
      </div>

      <div className="recipe-item">
        <div className="recipe-image">
          <img src={Pizza} alt="Pizza" />
        </div>
        <h1>Pizza</h1>
        <h5>35 Recipes</h5>
      </div>
    </div>
  </div>
);

export default Recipe;
