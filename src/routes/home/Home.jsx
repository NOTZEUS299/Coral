import React from "react";
import "../../sass/home.scss";
import Header from "../../elements/header/Header";
import LeftFloral from "../../utils/images/left-floral.png";
import RightFloral from "../../utils/images/right-floral.png";
import ShoppingIcon from "../../utils/images/v6-icon (free).png";
import ImageCnOne from "../../utils/images/engin-akyurt-jaZoffxg1yc-unsplash 1.png"

const Home = () => {
  return (
    <div className="main-container-home-page">
      <div className="top-main-container">
        <Header />
        <div className="product-container-one">
          <div className="product-content-one">
            <h1>Collections</h1>
            <p>
              you can explore ans shop many differnt collection from various
              barands here.
            </p>
            <button>
              <img src={ShoppingIcon} alt="" />
              <span>Shop Now</span>
            </button>
          </div>
          <section>
            <img src={ImageCnOne} alt="" />
          </section>
        </div>
      </div>
      <div className="background-floral">
        <div>
          <img src={LeftFloral} alt="" className="left-floral-pattern" />
          <img src={RightFloral} alt="" className="right-floral-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Home;
