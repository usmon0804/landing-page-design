import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Element from "../images/Circle Layer.svg";
import Mountain from '../images/mountain.svg'
import Object from '../images/Object Ungroup.svg'
import Users from '../images/Users.svg'
import Rocket from '../images/Rocket.svg'
import Bag from '../images/Bag.svg'
import Cube from '../images/Cube.svg'
function Second() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="block-2">
        <div className="title">
          <h1 data-aos="fade-up" data-aos-duration="800">Creating Extraordinary Customer Experience</h1>
          <p data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi <br /> dignissim eu pharetra consequat montes,
            sagittis.
          </p>
        </div>
        <div className="card_box">
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Element} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Integrity</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Displaying the highest level of Integrity in the way
              we conduct our business</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Mountain} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Demonstrate</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Demonstrating a strong Will to Win in the market place</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Object} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Diversity</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Promoting Diversity in the work place and community</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Users} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Teamwork</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Element} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Collaboration</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Displaying the highest level of Integrity in the way we conduct our business</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Rocket} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Technology</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Harnessing the power of Technology to deliver better customer experience</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Bag} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Corporate</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Setting the standard for the best Corporate Citizenship in the communities we work</h5>
            </div>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="800">
            <div className="img" data-aos="fade-up" data-aos-duration="1000">
              <img src={Cube} alt="" />
            </div>
            <div className="card_title" data-aos="fade-up" data-aos-duration="1000">
              <h3>Digital</h3>
            </div>
            <div className="card_text" data-aos="fade-up" data-aos-duration="1000">
              <h5>Setting the standard for the best Corporate Citizenship in the communities we work</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
