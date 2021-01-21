import { propTypes } from "react-bootstrap/esm/Image";
import Journal from "../components/Journal/journal";

function Entry(props) {
  return (
    <div>
        <p>{props.date}</p>
        <p>{props.blog}</p>
    </div>
  );
}

export default Entry;