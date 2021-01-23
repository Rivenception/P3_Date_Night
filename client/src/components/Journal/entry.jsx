function Entry(props) {
  return (
    <div>
        <p className="blog">{props.date}</p>
        <p className="fancy blog">{props.blog}</p>
    </div>
  );
}

export default Entry;