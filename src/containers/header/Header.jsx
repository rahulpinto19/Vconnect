import React from 'react';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s join and explore new events </h1>
      <p>This platform is designed to help students in gaining practical knowledge in their feild.
        Participate in contents and enhance your skills.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people"/>
        <p>People connected with us </p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="robot"/>
    </div>
  </div>
);

export default Header;