import React from "react";

function Post(props) {

  return (
    <button className="btn btn-secondary ml-1" type="submit" id="postSubmit" onClick={props.handleBlogSubmit}>
      Post Entry
    </button>
  );
}

export default Post;
