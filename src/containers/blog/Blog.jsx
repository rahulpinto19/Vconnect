import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="October 25 2023" text="Join the workshop here!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="October 25 2023" text="Particpiate in the hackathon " />
        <Article imgUrl={blog03} date="October 25 2023" text="see upcoming job vacancy" />
        <Article imgUrl={blog04} date="October 25 2023" text=" Brainstorming Hackathon" />
        <Article imgUrl={blog05} date="October 25 2023" text=" Mentor session from industry expert " />
      </div>
    </div>
  </div>
);

export default Blog;
