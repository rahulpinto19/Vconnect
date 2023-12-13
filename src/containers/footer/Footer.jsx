import React from "react";
import mailpic from "../../assets/mail.png";
import "./footer.css";
import Typed from "react-typed";
import PostUpdates from "../../components/PostUpdates";
import { Link } from "react-router-dom";

const Footer = () => {
  

  return (
    <div>
      <div>
        <div className="gpt3__footer section__padding">
          <div className="gpt3__footer-heading">
            <h1 className="gradient__text">üpdate a</h1>
            <h1 className="gradient__text">
              <Typed
                strings={[" job", "Hackathon", "Workshop"]}
                typeSpeed={100}
                backSpeed={100}
                loop
              >
                {/* <input type="text"/> */}
              </Typed>
            </h1>
          </div>

          {
            <div className="gpt3__footer-btn">
              <Link to="/PostUpdates">
                <p>Update</p>
              </Link>
            </div>
          }
          <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_div">
              <h4>Links</h4>
              <p>
                <a href="https://github.com/mohit-8692">Github</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/mohit-gupta-990003252/">
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="gpt3__footer-links_div">
              <h4>Owners</h4>
              <p>Terms & Conditions </p>
              <p>Privacy Policy</p>
              <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
              <h4>Contact us</h4>
              <p>
                Shalini Priya &nbsp; &nbsp;
                <a href="mailto:shalinipriya.10.11@gmail.com">
                  <img src={mailpic} alt="mail"></img>
                </a>
              </p>
              <p>
                Mohit Gupta &nbsp; &nbsp;
                <a href="mailto:mohitgupta8692@gmail.com">
                  <img src={mailpic} alt="mail"></img>
                </a>
              </p>
              <p>
                Manuka Rahul &nbsp; &nbsp;
                <a href="mailto:rahulyadav252424@gmail.com">
                  <img src={mailpic} alt="mail"></img>
                </a>
              </p>
            </div>
          </div>
          <div className="gpt3__footer-copyright">
            <p> All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
