import React from "react";

import Food from "../../assets/food.jpg";

import { ReactComponent as Person } from "../../icons/person.svg";
import { ReactComponent as Gredients } from "../../icons/shopping-bag.svg";
import { ReactComponent as NavigateBefore } from "../../icons/navigate-before.svg";
import { ReactComponent as Bookmark } from "../../icons/bookmark.svg";
import { ReactComponent as Description } from "../../icons/description.svg";

import "./planned-recipe.styles.scss";
import { Link } from "react-router-dom";

const PlannedRecipeDetails = () => (
  <div className="planned-recipe-details">
    <div className="image">
      <img src={Food} alt="Food" />
      <Link to="/" className="back-btn">
        <NavigateBefore />
      </Link>
    </div>
    <div className="lower">
      <div className="boorkmark-btn">
        <Bookmark />
      </div>

      <div className="head-section">
        <h1>Spicy Fried Rice</h1>
        <div className="duration">
          <span>15 Minute | Easy Cooking</span>
          <div className="people">
            <Person className="people-icon" />
            <h3>4 People</h3>
          </div>
        </div>
      </div>
      <div className="author">
        <img src={Food} alt="Food" />
        <h2>by Chef Smith John</h2>
        <button>+ Follow</button>
      </div>
      <div className="sections">
        <div className="heading">
          <button>
            <Gredients />
          </button>
          <h4>Ingredients</h4>
          <button
            onClick={(e) => {
              e.target.parentNode.parentNode.parentNode.classList.toggle(
                "show-gradient"
              );
            }}
            className="open-ing"
          >
            <NavigateBefore />
          </button>
        </div>
        <div className="contents">
          <div className="point">
            <span>1</span>
            <p>Rice</p>
          </div>
          <div className="point">
            <span>2</span>
            <p>Vegetables</p>
          </div>
          <div className="point">
            <span>3</span>
            <p>Oil</p>
          </div>
          <div className="point">
            <span>4</span>
            <p>Salt</p>
          </div>
        </div>
      </div>

      <div className="sections">
        <div className="heading">
          <button>
            <Description />
          </button>
          <h4>Instruction</h4>
          <button
            onClick={(e) => {
              e.target.parentNode.parentNode.parentNode.classList.toggle(
                "show-instructions"
              );
            }}
            className="open-ins"
          >
            <NavigateBefore />
          </button>
        </div>
        <div className="contents">
          <div className="point">
            <span>1</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className="point">
            <span>2</span>
            <p>necessitatibus iusto consequatur?</p>
          </div>
          <div className="point">
            <span>3</span>
            <p>necessitatibus iusto consequatur?Lorem, ipsum dolor.</p>
          </div>
          <div className="point">
            <span>4</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              necessitatibus iusto consequatur?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PlannedRecipeDetails;
