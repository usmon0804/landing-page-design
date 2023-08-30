import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Westin from "../images/westin.svg";
import Jummit from "../images/jummit.svg";
import Holcim from "../images/holcim.svg";
import ETV from "../images/ETV.svg";

function Third() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="block-3">
        <div className="title" data-aos="fade-up" data-aos-duration="800">
          <h1>BUSINESS PARTNERS</h1>
        </div>
        <div className="images">
          <img data-aos="fade-up" data-aos-duration="1000" src={Westin} alt="" />
          <img data-aos="fade-up" data-aos-duration="1000" src={Jummit} alt="" />
          <img data-aos="fade-up" data-aos-duration="1000" src={Holcim} alt="" />
          <img data-aos="fade-up" data-aos-duration="1000" src={ETV} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Third;
