import "./style.css"
import Button from "react-bootstrap/Button";

function Planner({ children }) {
  return (
    <div>
      <br />
      <h2 className="fancy">Planner</h2>
      <div className="row">{children}</div>
      <div className="row">
        <div className="col">
        <Button variant="danger" href="/planner">Generate new ideas!</Button>
        </div>
      </div>
    </div>
  );
}
export default Planner;
