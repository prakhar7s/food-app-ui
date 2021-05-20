import React from "react";

import Food from "../../assets/food.jpg";

import "./planned-cooking.styles.scss";

import { Link } from "react-router-dom";

const PlannedCooking = () => (
  <div className="planned-cooking">
    <div className="upper-part">
      <h1 className="upper-heading">Your Plan Cooking</h1>
      <a className="see-all" href="#">
        See All
      </a>
    </div>

    <img src={Food} alt="planned food" />

    <div className="about-planned">
      <div className="left">
        <h1>Spicy Fried Rice</h1>
        <h3>15 Minute | Easy Cooking</h3>
      </div>
      <div className="open-button">
        <Link to="/planned-recipe">&gt;</Link>
      </div>
    </div>
  </div>
);

export default PlannedCooking;
