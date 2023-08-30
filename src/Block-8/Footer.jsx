import React from "react";
import Facebook from "../images/facebook.svg";
import YouTube from "../images/youtube.svg";
import Linkedin from "../images/linkedin.svg";
import Instagram from "../images/instagram.svg";
import Call from "../images/call.svg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="box">
          <div className="title">
            <h2>About the company</h2>
          </div>
          <p>
            Learn To Love Growth <br /> And Change And You Will <br /> Be A
            Success. Microsoft <br /> Patch{" "}
          </p>
          <div className="social">
            <img src={Facebook} alt="" />
            <img src={YouTube} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        <div className="card">
          <div className="card_title">
            <h3>Products</h3>
          </div>
          <ul>
            <li>
              <a href="#">CSR Activities</a>
            </li>
            <li>
              <a href="#">Green Banking</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Ongoing Campgain</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card_title">
            <h3>Get Started</h3>
          </div>
          <ul>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Government Securities</a>
            </li>
            <li>
              <a href="#">Examples</a>
            </li>
            <li>
              <a href="#">NIS</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <div className="card_title">
            <h3>About</h3>
          </div>
          <ul>
            <li>
              <a href="#">IPDC at a Glance</a>
            </li>
            <li>
              <a href="#">Mission, VIsion & Values</a>
            </li>
            <li>
              <a href="#">Corporate Governanace</a>
            </li>
            <li>
              <a href="#">Shareholders</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
          </ul>
        </div>
        <div className="call">
          <img src={Call} alt="" />
          <h3>16519</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
