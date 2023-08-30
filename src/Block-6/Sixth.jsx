import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Sixth() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="block-6">
        <div className="title">
          <h1 data-aos="fade-up" data-aos-duration="800">Our best results for the year</h1>
          <p data-aos="fade-up" data-aos-duration="800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus <br /> mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="card_box">
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">57.6 bn</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">LOAN PORTFOLIO</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">0.95%</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">CLASSIFIED LOAN <br /> PORTFOLIO</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">388.5%</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">CLASSIFIED LOAN <br /> COVERAGE</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">50.4 bn</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">DEPOSIT</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">6.1 bn</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">Shareholders <br /> equity</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">18.51%</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">Capital Adequacy <br /> Ratio</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">8.5 bn</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">Market <br /> Capitalization</h4>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <h2 data-aos="fade-up" data-aos-duration="1000">AAA</h2>
            <h4 data-aos="fade-up" data-aos-duration="1000">Credit Rating</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sixth;
