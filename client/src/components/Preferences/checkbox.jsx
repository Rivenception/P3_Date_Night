function Checkbox(props) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        {props.innerHTML}
      </label>
    </div>
  );
}

export default Checkbox;
