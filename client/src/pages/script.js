$(document).ready(function () {
    var dateSelect = $('#date');
    var blogSelect = $('#blog');

  $(document).on("click", "#postSubmit", handleFormSubmit);

    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit() {
    console.log("Add Button Triggered");
    // Wont submit the post if we are missing a body, title, or author
    // Wont submit the post if we are missing a body, or date
    if (!blogSelect.val() || !dateSelect.val().trim()) {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text(
          "Make sure to enter a date or blog entry"
        );
        tableContainer.prepend(alertDiv);
        return;
      }

    // Constructing a newPost object to hand to the database
    var newEntry = {
        date: dateSelect.val(),
        blog: blogSelect.text().trim()
    };

    submitPost(newEntry);
}; 

  // Submits a new Blog entry
  function submitPost(data) {
    console.log("Posting new entry...");
    $.post("/api/blog", data).then(getLastEntries);
  }

  // Function for retrieving tableRows and getting them ready to be rendered to the page
  function getLastEntries() {
    console.log("Getting latest entries for " + userName);
    var rowsToAdd = [];
    var route = "/api/blog" + userName;
    $.get(route, function (data) {
      for (var i = 0; i < data.length; i++) {
        var newEntry = {
          date: data[i].date,
          blog: data[i].blog,
        };
        // console.log(newEntry);
        rowsToAdd.push(newEntry);
        // console.log(rowsToAdd);
      }
      renderList(createEntry(rowsToAdd));
    });
  }

  // Function for creating a new list row for tableRows
  function createEntry(newEntry) {
    console.log("Creating Rows...");
    var allEntries = [];
    for (var i = 0; i < newEntry.length; i++) {
      var newTr = $("<div id=" + newEntry[i].id + ">");
      newTr.data("tableRow", newEntry[i].id);
      newTr.append("<p>" + newEntry[i].date + "</p>");
      newTr.append("<p>" + newEntry[i].blog + "</p>");
      allEntries.push(newTr);
    }
    return allEntries;
  }

  // A function for rendering the list of tableRows to the page
  function renderList(rowsToAdd) {
    if (rowsToAdd.length) {
      // console.log(rowsToAdd);
      tableBody.prepend(rowsToAdd);
    } else {
      renderEmpty();
    }
  }
});
