import React from "react";
import "./css/header.css";
import headerImage1 from "./img/header-img-1.jpg";

function Header() {
  return (
    <div className="header-container">
      <div className="header-main-name">
        <img src={headerImage1} alt="hinhanh" />
        <span className="">ILT</span>
      </div>
      <div className="header-navbar">
        <a href="">HOME</a>
        <a
          href="https://www.canva.com/design/DAF5NgVBFrw/Bitqh2OIj2S-MY3ibLxILQ/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABOUT US
        </a>
        <a
          href="https://www.facebook.com/jayllFA"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
}

export default Header;
