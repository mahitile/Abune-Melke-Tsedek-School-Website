function searchFunction() {
  var query = document.querySelector(".search-bar input").value;
  if (query) {
    alert("You searched for: " + query);
  } else {
    alert("Please enter a search term.");
  }
}
