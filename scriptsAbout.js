document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
      document.getElementById("formMessage").textContent =
        "Please fill in all fields.";
      document.getElementById("formMessage").style.color = "red";
    } else {
      document.getElementById("formMessage").textContent =
        "Thank you for your message!";
      document.getElementById("formMessage").style.color = "green";

      // Clear form fields
      document.getElementById("contactForm").reset();
    }
  });
