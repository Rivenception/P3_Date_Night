import Post from "../Buttons/post"
import "./style.css";

function Journal() {
  return (
    <div>
      <br />
      <h2 className="fancy">Our Adventures</h2>
      <input id="date" type="date" />
      <br/>
      <br/>
      <div className="offset-md-2 col-md-8">
      <textarea
        placeholder="Add details about your date"
        id="blog"
        type="text"
        style={{ width: "-webkit-fill-available", height: "100px" }}
      />
      </div>
      <Post/>
    </div>
  );
}

export default Journal;
