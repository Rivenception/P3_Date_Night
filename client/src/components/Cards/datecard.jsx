import "./style.css";

function Datecard(props) {
  return (
    <div className="card offset-2" style={{width: "18rem"}}>
    <img src={props.screenshot} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.dateidea}</h5>
            <p className="card-text">{props.instructions}</p>
        </div>
        <ul className="list-group list-group-flush">
            {/* will need to map props here for suggested items to buy */}
            <li className="list-group-item">Cras justo odio</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">{props.affiliate}</a>
        </div>
    </div>
  );
}

export default Datecard;
  