import React, { useState, useEffect } from "react";
import Post from "../Buttons/post";
import "./style.css";
import { postBlogs, getBlogs } from "../../utils/api";
import Entry from "./entry";

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
    
    //posting input data from user
    postBlogs(data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    //after post new blog entry we are getting all blog posts and mapping to our Entry component
    getBlogs()
    .then((res) => {
    console.log(res.data);
    setPosts(res.data);
    })
    .catch((err) => console.log(err));
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
      <br/>
      <br/>
      {posts.map(post => (
      <Entry
      date={post.date}
      blog={post.blog}
      />
      ))}
    </div>
  );
}

export default Journal;
