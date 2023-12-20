import React from "react";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s join and explore new events{" "}
      </h1>
      <p>
        This platform is designed to help students in gaining practical
        knowledge in their feild. Participate in contents and enhance your
        skills.
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="robot" />
    </div>
  </div>
);

export default Header;
