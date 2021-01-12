function Profile() {
  return (
    <div>
      <br />
      <h2 className="fancy">Our Adventures</h2>
      <input placeholder="Enter the date" id="date" value="" type="date" />
      <input
        placeholder="Add details about your date"
        id="inputGroupNotes"
        type="text"
        style={{ width: "-webkit-fill-available", height: "100px" }}
      />
    </div>
  );
}

export default Profile;
