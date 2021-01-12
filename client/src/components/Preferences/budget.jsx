import "./style.css";
import Checkbox from "./checkbox";

function Budget() {
  return (
    <div>
      <hr className="mt-2 mb-3 separator" />
      <h2 className="fancy">Budget</h2>
      <hr className="mt-2 mb-3 separator" />
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <Checkbox innerHTML={"Low"}/>
        <Checkbox innerHTML={"Medium"}/>
        <Checkbox innerHTML={"High"}/>
      </div>
    </div>
  );
}

export default Budget;
