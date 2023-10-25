import React from 'react';
import possibilityImage from '../../assets/hackathon.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Participate in this hackathon</h4>
      <h1 className="gradient__text">Attend the hackathon <br /> and enhance your coding skills</h1>
      <p>Some of the platform are: <br /><a href="https://www.hackerrank.com/">Hackerrank</a>
      <br/><a href="https://www.geeksforgeeks.org/contests/">GFG</a></p>   
    <h4>Click on the platform name to register in different coding competitions.</h4>
    </div>
  </div>
);

export default Possibility;