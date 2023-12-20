import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Hackathon',
    text: 'Some of the best platform for participating in online hackathon are hackerearth,gfg,leetcode,hackerrank',
  },
  {
    title: 'Job Opportunity',
    text: 'Most recommended job portals are LinkedIn,Unstop,Naukri.com',
  },
  {
    title: 'Workshop',
    text: 'Meet our alumini and learn from their experience after getting placed at different companies.',
    text: 'Meet our alumini and learn from their experience after getting placed at different companies.',
  }
 
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;