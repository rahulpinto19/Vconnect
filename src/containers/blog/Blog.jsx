import React, { useState } from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import axios from "axios";

const Blog = () => {
  const images = [blog01, blog02, blog03, blog04, blog05];
  const initialData = {};
  const [data, setdata] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const loadMore = () => {
    if (data.length > endIndex) {
      setStartIndex(startIndex + 5);
      setEndIndex(endIndex + 5);
      const element = document.getElementById("post");
      element && element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const loadPrev = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5);
      setEndIndex(endIndex - 5);
      const element = document.getElementById("post");
      element && element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const getUpdates = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      setdata(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  let value = 0;
  return (
    <div>
      <div className="gpt3__blog section__padding" id="blog">
        <div className="gpt3__blog-heading" id="k">
          <h1 className="gradient__text">
            A lot is happening, <br /> We are blogging about it.
          </h1>
          <button
            className="btn btn-primary gradient__text"
            onClick={getUpdates}
          >
            show posts
          </button>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB">
            {data.map(
              (note, index) => {
                if (index >= startIndex && index < endIndex) {
                  return (
                    <div id="post">
                      <Article
                        imgUrl={`${images[value++ % images.length]}`}
                        date={note.date}
                        text={note.eventname}
                        linkUrl={note.link}
                        typeofevent={note.typeofevent}
                      />
                    </div>
                  );
                }
              },
              [data]
            )}
          </div>
        </div>
        {data.length && (
          <div className=" prevnext_button">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 py-100 left-0 "
              onClick={loadPrev}
            >
              &laquo; Prev
            </button>
            {/* <span>    </span> */}
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 py-100 right-10   "
              onClick={loadMore}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
