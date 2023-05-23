import React, { useEffect, useState } from "react";
import "../../sass/home.scss";
import Header from "../../elements/header/Header";
import LeftFloral from "../../utils/images/left-floral.png";
import RightFloral from "../../utils/images/right-floral.png";
import ShoppingIcon from "../../utils/images/v6-icon (free).png";
import ImageContainerOne from "../../utils/images/engin-akyurt-jaZoffxg1yc-unsplash 1.png";
import brandOne from "../../utils/images/04.png";
import brandTwo from "../../utils/images/02.png";
import brandThree from "../../utils/images/03.png";
import brandFour from "../../utils/images/01.png";
import brandFive from "../../utils/images/05.png";
import filterIcon from "../../utils/images/icon.png";
import brandBgImage from "../../utils/images/andrey-zvyagintsev-EQj1ZMpq_VM-unsplash 1.png";
import zaraLogo from "../../utils/images/1024px-Zara_Logo 2.png";
import zaraBgLogo from "../../utils/images/1024px-Zara_Logo 1.png";
import footerLogo from "../../utils/images/footer-logo.png"
import availabePayments from "../../utils/images/icons_payment 1.png"
import MasterData from "../../utils/data/masterData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState();

  const hotCategory = MasterData[0]?.productData?.filter((x) => {
    return x?.category === "hot-category";
  });

  const gridProducts = MasterData[0]?.productData?.filter((x) => {
    return x?.category !== "hot-category";
  });

  const bestSeller = MasterData[1]?.bestSeller;

  const postData = MasterData[2]?.postData;

  useEffect(() => {
    window.document.title = "CORAL ~ HOME";
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", () => {
      setInnerWidth(window.innerWidth);
    });

    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("mousemove", () => {
        setInnerWidth(window.innerWidth);
      });
      window.removeEventListener("resize", () => {
        setInnerWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className="main-container-home-page">
      <div className="container-one-home-page">
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
            <img src={ImageContainerOne} alt="" />
          </section>
        </div>
      </div>
      <div className="background-floral">
        <div>
          <img src={LeftFloral} alt="" className="left-floral-pattern" />
          <img src={RightFloral} alt="" className="right-floral-pattern" />
        </div>
      </div>
      <div className="container-two-home-page">
        <div className="brands-container">
          <img src={brandOne} alt="S.SALVA" />
          <img src={brandTwo} alt="FUTURE DESIGN" />
          <img src={brandThree} alt="GOLDEN STUDIO" />
          <img src={brandFour} alt="TRAVEL LOOKBOOK" />
          <img src={brandFive} alt="GRAPHIC STUDIO" />
        </div>
        <div className="hot-category-container">
          <div className="hot-category-text">
            Explore new and popular styles
          </div>
          <div className="hot-category-card-container">
            {hotCategory?.map((x, i) => {
              return (
                <div className="hot-category-product-card" key={i}>
                  <img src={x?.img} alt="" />
                  <div className={`product-card-ribbon ${x?.ribbon}`}>
                    {x?.ribbon !== "none" && x?.ribbon}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-grid-container">
          <h2 className="product-grid-container-title">
            Or subscribe to the newsletter
          </h2>
          <div className="product-navigation">
            <ul>
              <li>All Products</li>
              <li>T-Shirt</li>
              <li>Hoodies</li>
              <li>Jacket</li>
            </ul>
            <button>
              <img src={filterIcon} alt="" />
              Filter
            </button>
          </div>
          <div className="product-cards-container">
            {gridProducts?.map((x, i) => {
              return (
                <div className="product-card" key={i}>
                  <section>
                    <img src={x?.img} alt="" />
                    <div className={`product-card-ribbon ${x?.ribbon}`}>
                      {x?.ribbon !== "none" && x?.ribbon}
                    </div>
                  </section>
                  <section>
                    <p>{x?.name}</p>
                    <div>
                      <p>{x?.des}</p>
                      <p>
                        <span
                          className={`product-price product-price-with-discount-${
                            x?.discount !== "none"
                          }`}
                        >
                          {x?.price}
                        </span>
                        {x?.discount !== "none" && (
                          <span
                            className={`product-price card-discount-${
                              x?.discount !== "none"
                            }`}
                          >
                            {x?.discount}
                          </span>
                        )}
                      </p>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
        <div className="brand-banner-container">
          <img
            src={brandBgImage}
            alt=""
            className="brand-banner-background-img"
          />
          <img src={zaraBgLogo} alt="" className="zara-bg-logo" />
          <div className="brand-banner-content">
            <img src={zaraLogo} alt="" className="zara-logo" />
            <p>
              Lustrous yet understated. The new evening wear collection
              exclusively offered at the reopened Giorgio Armani boutique in Los
              Angeles.
            </p>
            <button>see collection</button>
          </div>
        </div>
        <div className="product-grid-container" id="swiper-product-container">
          <h2 className="product-grid-container-title">best sellers</h2>
          <div className="product-navigation">
            <ul>
              <li>All Products</li>
              <li>T-Shirt</li>
              <li>Hoodies</li>
              <li>Jacket</li>
            </ul>
            <button>
              <img src={filterIcon} alt="" />
              Filter
            </button>
          </div>
          <Swiper
            className="product-cards-container swiper-card-container"
            slidesPerView={innerWidth > 750 ? 4 : 2}
            spaceBetween={24}
            modules={[Navigation]}
            navigation={true}
          >
            {bestSeller?.map((x, i) => {
              return (
                <SwiperSlide className="product-card" key={i}>
                  <section>
                    <img src={x?.img} alt="" />
                    <div className={`product-card-ribbon ${x?.ribbon}`}>
                      {x?.ribbon !== "none" && x?.ribbon}
                    </div>
                  </section>
                  <section>
                    <p>{x?.name}</p>
                    <div>
                      <p>{x?.des}</p>
                      <p>
                        <span
                          className={`product-price product-price-with-discount-${
                            x?.discount !== "none"
                          }`}
                        >
                          {x?.price}
                        </span>
                        {x?.discount !== "none" && (
                          <span
                            className={`product-price card-discount-${
                              x?.discount !== "none"
                            }`}
                          >
                            {x?.discount}
                          </span>
                        )}
                      </p>
                    </div>
                  </section>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="container-three-home-page">
        <div>
          <h2>Follow products and discounts on Instagram</h2>
          <div>
            {postData?.map((x, i) => {
              return <img src={x?.img} alt="" key={i} />;
            })}
          </div>
        </div>
        <div>
          <h2>Or subscribe to the newsletter</h2>
          <div>
            <input type="email" placeholder="Email Address..." />
            <button>submit</button>
          </div>
        </div>
      </div>
      <footer className="footer-home-page">
        <div className="footer-content">
          <div className="coral-description">
            <img src={footerLogo} alt="" />
            <p className="description-paragraph">
              Coral is a sample site, just to show our skills in technologies
              such as react.js. like it?, than let us build yours :)
            </p>
            <div className="footer-socials-navigation">
              <p className="facebook">
                <FaFacebookF className="social-icons"/>
              </p>
              <p className="twitter">
                <FaTwitter className="social-icons"/>
              </p>
              <p className="linkdin">
                <FaLinkedinIn className="social-icons"/>
              </p>
              <p className="instagram">
                <FaInstagram className="social-icons"/>
              </p>
            </div>
          </div>
          <div className="catalog-about-us-and-customer-care">
            <div className="footer-catalog">
              <ul>
                <li>catalog</li>
                <li>necklaces</li>
                <li>hoodies</li>
                <li>jewelry box</li>
                <li>t-shirt</li>
                <li>jacket</li>
              </ul>
            </div>
            <div className="footer-about-us">
            <ul>
              <li>about us</li>
                <li>our producers</li>
                <li>sitemap</li>
                <li>FAQ</li>
                <li>about us</li>
                <li>terms & conditions</li>
              </ul>
            </div>
            <div className="customer-services">
            <ul>
              <li>customer sevices</li>
                <li>contact us</li>
                <li>track your order</li>
                <li>product care & repair</li>
                <li>book an appointment</li>
                <li>shipping & returns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-end-bar">
          <section className="copy-rights">
            <p>© 2022 Coral , Inc.</p>
          </section>
          <section className="payments-available">
            <img src={availabePayments} alt="" />
          </section>
          <section className="scroll-to-top" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <p>
              scroll to top <FaArrowUp className="scroll-to-top-arrow"/>
            </p>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Home;
