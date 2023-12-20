import "./article.css";

import React from "react";

const Article = ({ imgUrl, date, text, linkUrl ,typeofevent}) => {
  const linkName = "OpenAI Website";

  const handleLinkClick = () => {
    //the user should enter the proper url to navigate
    // store the url after validating the url
    window.location.href = linkUrl;
  };
  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "short", // You can use 'long' for full month name
      year: "numeric",
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <div className="position-relative">
        <span className="  badge rounded-pill text-bg-danger position-absolute  end-0">
            {typeofevent ?typeofevent :"new"}
          </span>
      <div className="gpt3__blog-container_article ">
        <div className="gpt3__blog-container_article-image">
          <img src={imgUrl} alt="blog_image" />
        </div>
        <div className="gpt3__blog-container_article-content">
          <div>
            <p>{formatDate(date)}</p>
            <h3>{text}</h3>
          </div>
          <p>
            Read more about <a onClick={handleLinkClick}>This Article</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
