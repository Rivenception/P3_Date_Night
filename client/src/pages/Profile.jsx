function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <label htmlFor="auth">Date:</label>
      <input placeholder="Enter the date" id="date" value="" type="date" />
      <label htmlFor="notes">Notes:</label>
      <input
        placeholder="Enter Notes"
        id="inputGroupNotes"
        type="text"
        style={{width: "-webkit-fill-available", height: "100px"}}
      />
    </div>
  );
}

export default Profile;
