import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Flower from "../images/flower.svg";

function Fourth() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="block-4">
        <div className="box">
          <img data-aos="fade-right" data-aos-duration="700" src={Flower} alt="" />
        </div>
        <div className="box">
          <div className="text">
            <h1 data-aos="fade-left" data-aos-duration="500">IPDC AT A GLANCE</h1>
            <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
              IPDC Finance Limited (previously known as "Industrial <br /> Promotion
              and Development Company of Bangladesh <br /> Limited") is the first
              private sector financial institution of <br /> the country established in
              1981 by a distinguished group of <br /> shareholders namely International
              Finance Corporation <br /> (IFC), USA, German Investment and Development <br />
              Company (DEG), Germany, The Aga Khan Fund for <br /> Economic Development
              (AKFED), Switzerland, Commonwealth Development Corporation (CDC),
              UK and <br /> the Government of Bangladesh
            </p>
            <button data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
