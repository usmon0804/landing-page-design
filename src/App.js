import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import IPDC from "./images/IPDC.svg";
import Search from "./images/search.svg";
import Picture from "./images/picture.png";
import Car from "./images/car.png";
import Home from "./images/House.png";

import Second from "./Block/Second";
import Third from "./Block-3/Third";
import Fourth from "./Block-4/Fourth";
import Fifth from "./Block-5/Fifth";
import Sixth from "./Block-6/Sixth";
import Seventh from "./BLock-7/Seventh";
import Footer from "./Block-8/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="block">
          <div className="navbar">
            <div className="logo">
              <img data-aos="fade-right" data-aos-duration="500" src={IPDC} alt="" />
            </div>
            <div className="menu">
              <ul>
                <li data-aos="fade-right" data-aos-duration="700">
                  <a href="#">Retail</a>
                </li>
                <li data-aos="fade-right" data-aos-duration="900">
                  <a href="#">SME</a>
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <a href="#">Corporate</a>
                </li>
                <li data-aos="fade-left" data-aos-duration="1000">
                  <a href="#">About Us </a>
                </li>
                <li data-aos="fade-left" data-aos-duration="900">
                  <a href="#">Covid 19</a>
                </li>
                <li data-aos="fade-left" data-aos-duration="700">
                  <a href="#">Campgains</a>
                </li>
              </ul>
            </div>
            <div className="search">
              <img data-aos="fade-left" data-aos-duration="500" src={Search} alt="" />
              <button data-aos="fade-left" data-aos-duration="500">iSERVICE</button>
            </div>
          </div>

          <div className="box">
            <div className="text">
              <h1 data-aos="fade-right" data-aos-duration="800">
                Chase Your <br /> Dream with us
              </h1>
              <p data-aos="fade-right" data-aos-duration="1000">
                The harder you work for something, the greater <br /> you’ll
                feel when you achieve it.
              </p>
              <div className="buttons">
                <button className="apply_btn" data-aos="fade-right" data-aos-duration="1200">APPLY ONLINE</button>
                <button className="loan_btn" data-aos="fade-right" data-aos-duration="1400">LOAN CALCULATOR</button>
              </div>
            </div>
          </div>
          <div className="box" style={{ background: "#FFEAF5" }}>
            <div className="loan-1" data-aos="fade-right" data-aos-duration="800">
              <img src={Home} alt="" />
              <h3>Home Loan</h3>
            </div>
            <div className="loan-2" data-aos="fade-down" data-aos-duration="1000">
              <img src={Car} alt="" />
              <h3>Car Loans</h3>
            </div>
          
              <img data-aos="fade-left" data-aos-duration="1200"
                style={{
                  width: "120%",
                  height: "95%",
                  position: "relative",
                  right: "10%",
                  top: "10%",
                }}
                src={Picture}
                alt=""
              />
          </div>
        </div>
        <Second />
        <Third />
        <Fourth />
        <Fifth />
        <Sixth />
        <Seventh />
        <Footer />
      </div>
    </div>
  );
}

export default App;
