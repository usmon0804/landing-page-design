import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Seventh() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="block-7">
        <div className="title">
          <h1 data-aos="fade-up" data-aos-duration="800">Newsletter</h1>
          <p data-aos="fade-up" data-aos-duration="800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus <br /> mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="line">
            <input data-aos="fade-right" data-aos-duration="800" type="text" placeholder="Your email" />
            <button data-aos="fade-left" data-aos-duration="800">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Seventh;
