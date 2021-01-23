import "./style.css";
import { faTag, faHome, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Datecard(props) {
  const locationCheck = [];
  const budgetCheck = [];

  if (props.location === "Home") {
    locationCheck.push(<FontAwesomeIcon icon={faHome} key={props.id}/>);
  } else if (props.location === "Outdoors") {
    locationCheck.push(<FontAwesomeIcon icon={faCloudSun} key={props.id}/>);
  }

  if (props.budget === "Low") {
    budgetCheck.push(<FontAwesomeIcon icon={faTag} key={props.id}/>);
  } else if (props.budget === "Medium") {
    budgetCheck.push(<FontAwesomeIcon icon={faTag} key={props.id}/>);
    budgetCheck.push(<FontAwesomeIcon icon={faTag} key={props.id + "second"}/>);
  } else if (props.budget === "High") {
    budgetCheck.push(<FontAwesomeIcon icon={faTag} key={props.id}/>);
    budgetCheck.push(<FontAwesomeIcon icon={faTag} key={props.id + "second"}/>);
    budgetCheck.push(<FontAwesomeIcon icon={faTag} key={props.id + "third"}/>);
  }

  return (
    <div className="container col-md-12 col-lg-3">
      <div className="card mx-auto">
        <img src={props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.date}</h5>
          <p className="card-text">{props.instructions}</p>
        </div>
        <ul className="list-group list-group-flush" id="location">
          <li className="list-group-item">
            {locationCheck} {props.location}
          </li>
          <li className="list-group-item">
          {budgetCheck} {props.budget}
          </li>
        </ul>
        <ul className="list-group list-group-flush" id="items">
          <li className="list-group-item">{props.items}</li>
        </ul>
        <div className="card-body">
          <a href={props.links} className="card-link">
            Find on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}

export default Datecard;
