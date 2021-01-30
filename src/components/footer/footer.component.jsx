import React, { useRef, useState } from "react";

import { ReactComponent as Person } from "../../icons/person.svg";
import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as Description } from "../../icons/description.svg";
import { ReactComponent as Home } from "../../icons/home.svg";

import "./footer.component.scss";

const Footer = () => {
  const [iconsColor, setIconsColor] = useState("white");

  const navOptions = useRef();

  const handleNavOptionClick = (e) => {
    var container = "";

    const { tagName } = e.target;

    if (tagName.trim() === "path") {
      container = e.target.parentNode.parentNode;
    }
    if (tagName.trim() === "svg") {
      container = e.target.parentNode;
    } else {
      container = e.target;
    }

    console.log(navOptions.current);

    // remove all previous active classes
    Array.from(navOptions.current.children).forEach((navOption) => {
      navOption.classList.remove("active");
    });

    container.classList.add("active");
  };

  return (
    <div className="footer" ref={navOptions}>
      <div
        className="nav-option active"
        onClick={(e) => handleNavOptionClick(e)}
      >
        <Home fill={iconsColor} />
      </div>
      <div className="nav-option" onClick={(e) => handleNavOptionClick(e)}>
        <Search fill={iconsColor} />
      </div>
      <div className="nav-option" onClick={(e) => handleNavOptionClick(e)}>
        <Description fill={iconsColor} />
      </div>
      <div className="nav-option" onClick={(e) => handleNavOptionClick(e)}>
        <Person fill={iconsColor} />
      </div>
    </div>
  );
};

export default Footer;
