import React, { useState, useEffect } from "react";
// import blog from "../../../../models/blog";
import Post from "../Buttons/post";
import "./style.css";
import { postBlogs, getBlogs } from "../../utils/api";

function Journal() {
  const [posts, setPosts] = useState([]);
  const [entry, setBlog] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDateChange = (event) => {
    const { value } = event.target;
    setDate(value);
    console.log(date);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setBlog(value);
    console.log(entry);
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    var data = {
      user: "some user",
      date: date,
      blog: entry,
    };
    console.log(data);
    postBlogs(data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    // fetch("api/blogs", {
    //   method: "POST",
    //   mode: "no-cors",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  };

  return (
    <div>
      <br />
      <h2 className="fancy">Our Adventures</h2>
      <input id="date" type="date" onChange={handleDateChange} />
      <br />
      <br />
      <div className="offset-md-2 col-md-8">
        <textarea
          onChange={handleInputChange}
          placeholder="Add details about your date"
          id="blog"
          type="text"
          style={{ width: "-webkit-fill-available", height: "100px" }}
        />
      </div>
      <Post handleBlogSubmit={handleBlogSubmit} />
    </div>
  );
}

export default Journal;
