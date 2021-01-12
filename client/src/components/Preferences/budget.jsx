import "./style.css";

function Budget() {
  return (
    <div>
      <hr className="mt-2 mb-3 separator" />
      <h2 className="fancy">Budget</h2>
      <hr className="mt-2 mb-3 separator" />
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="custom-control custom-checkbox d-block">
          <input
            className="custom-control-input"
            type="checkbox"
            id="subscribe_me"
            checked=""
          />
          <label className="custom-control-label" htmlFor="subscribe_me">
            Low
          </label>
        </div>
        <div className="custom-control custom-checkbox d-block">
          <input
            className="custom-control-input"
            type="checkbox"
            id="subscribe_me"
            checked=""
          />
          <label className="custom-control-label" htmlFor="subscribe_me">
            Medium
          </label>
        </div>
        <div className="custom-control custom-checkbox d-block">
          <input
            className="custom-control-input"
            type="checkbox"
            id="subscribe_me"
            checked=""
          />
          <label className="custom-control-label" htmlFor="subscribe_me">
            High
          </label>
        </div>
      </div>
    </div>
  );
}

export default Budget;
