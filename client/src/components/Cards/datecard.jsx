import "./style.css";

function Datecard(props) {
  return (
    <div className="card offset-2" style={{width: "18rem"}}>
    <img src={props.screenshot} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.date}</h5>
            <p className="card-text">{props.instructions}</p>
        </div>
        <ul className="list-group list-group-flush" id="location">
            {/* will need to map props here for suggested items to buy */}
            <li className="list-group-item">{props.location}</li>
        </ul>
        <ul className="list-group list-group-flush" id="budget">
            {/* will need to map props here for suggested items to buy */}
        <li className="list-group-item">{props.budget}</li>
        </ul>
        <ul className="list-group list-group-flush" id="items">
            {/* will need to map props here for suggested items to buy */}
            <li className="list-group-item">{props.items}</li>
        </ul>
        <div className="card-body">
            <a href={props.links} className="card-link">Find on Amazon</a>
        </div>
    </div>
  );
}

export default Datecard;
  