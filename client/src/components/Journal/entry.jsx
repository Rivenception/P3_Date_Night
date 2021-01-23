// import axios from 'axios'
import "./style.css";

function Entry(props) {

  // function handleClick(e){
  //   e.preventDefault()
  //   axios.delete('/api/blog/:id')
  // }


  return (
    <div >
        <p className="blog">{props.date}</p>
        <p className="fancy blog">{props.blog}</p>
        {/* <button className="btn btn-info" id={props.id}> delete </button> */}
    </div>
  );
}

export default Entry;