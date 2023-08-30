import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Flower from '../images/flower 1.svg'
import Parachute from '../images/parachute.svg'
import Pig from '../images/pig.svg'
import Taxi from '../images/taxi.svg'

function Fifth() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="block-5">
        <div className="title">
          <h2 data-aos="fade-up" data-aos-duration="800">Our Services</h2>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="card_box">
            <div className="card" data-aos="fade-up" data-aos-duration="800">
                <img data-aos="fade-up" data-aos-duration="1000" src={Flower} alt="" />
                <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
                    <h3>IPDC SAVING <br /> SCHEMES</h3>
                </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="800">
                <img data-aos="fade-up" data-aos-duration="1000" src={Parachute} alt="" />
                <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
                    <h3>IPDC PERSONAL <br /> LOAN</h3>
                </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="800">
                <img data-aos="fade-up" data-aos-duration="1000" src={Pig} alt="" />
                <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
                    <h3>IPDC DEPOSIT <br /> SCHEMES</h3>
                </div>
            </div>
            <div className="card" data-aos="fade-up" data-aos-duration="800">
                <img data-aos="fade-up" data-aos-duration="1000" src={Taxi} alt="" />
                <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
                    <h3>IPDC AUTO <br /> LOAN</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
