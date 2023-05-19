import React, { useState } from "react";
import "./header.scss";
import HeaderLogo from "../../utils/images/logo.png";
import AccountLogo from "../../utils/images/account-icon.png";
import ShoppingLogo from "../../utils/images/shopping-icon.png";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="main-container-header">
      <div className="upper-container">
        <div className="search-icon-container">
          <AiOutlineSearch className="header-icons" />
        </div>
        <div className="header-main-logo">
          <img src={HeaderLogo} alt="CORAL" />
        </div>
        <div className="account-shopping-and-navigation-icons">
          <div className="account-icon-container">
            <img src={AccountLogo} alt="" className="header-icons" />
            <span>Account</span>
          </div>
          <div className="shopping-icon-container">
            <img src={ShoppingLogo} alt="" className="header-icons" />
            <span>Shopping</span>
          </div>
          <div
            className={`custom-navigation-icon-container move-icon-${show}`}
            onClick={() => setShow(!show)}
          >
            <div className={`line-one rotate-one-${show}`}></div>
            <div className={`line-two rotate-two-${show}`}></div>
          </div>
        </div>
      </div>

      <div className="lower-container">
        <ul>
          <li>Jewlery & Accessories</li>
          <li>Clothing & Shoes</li>
          <li>Home & Living</li>
          <li>Wedding & Party</li>
          <li>Toys & Entertainment</li>
          <li>Art & Collectibles</li>
          <li>Craft Supplies & Tools</li>
        </ul>
      </div>

      <div className={`left-navigation-bar slide-${!show}`}>
        <ul>
          <li>Jewlery & Accessories</li>
          <li>Clothing & Shoes</li>
          <li>Home & Living</li>
          <li>Wedding & Party</li>
          <li>Toys & Entertainment</li>
          <li>Art & Collectibles</li>
          <li>Craft Supplies & Tools</li>
          <li>
            <img src={AccountLogo} alt="" className="header-icons" />
            <span>Account</span>
          </li>
          <li>
            {" "}
            <img src={ShoppingLogo} alt="" className="header-icons" />
            <span>Shopping</span>
          </li>
        </ul>
      </div>

      <div className="compnsation-div-for-space"></div>
    </header>
  );
};

export default Header;
