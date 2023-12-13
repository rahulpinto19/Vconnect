import React from "react";
import { useNavigate } from "react-router-dom";
import "./cta.css"
const CTA = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="gpt3__cta">
        <div className="gpt3__cta-content">
          <p>Request Early Access to Get Started</p>
          <h3>Register Today & start exploring the endless possibilities.</h3>
        </div>
        <div className="gpt3__cta-btn">
          <button
            type="button"
            onClick={() => {
              console.log("onclik");
              navigate("/signup")
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
