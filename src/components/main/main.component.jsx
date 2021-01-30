import React from "react";
import Recipe from "../recipes/recipe.component";
import PlannedCooking from "../planned-cooking/planned-cooking.component";

import "./main.component.scss";

const Main = () => (
  <div className="main">
    <PlannedCooking />
    <Recipe />
  </div>
);

export default Main;
