let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

// Initialize EmailJS with your public key
(function() {
  emailjs.init("j5vu2qRA6sVjadX3w");
})();

// Template parameters for the email
let templateParams = {
  to_name: "Duck Hunter",
  from_name: name.value,
  from_email: email.value,
  message: message.value
};

// Function to validate form fields before submission
function validateForm() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  // Check if any fields are empty
  if (nameValue === "" || emailValue === "" || messageValue === "") {
    showAlert("All fields are required.", "error");
    return false;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailValue)) {
    showAlert("Please enter a valid email address.", "error");
    return false;
  }

  return true;
}

// Function to submit the form if validation passes
function submitMessage() {
  if (!validateForm()) {
    return;
  }

  // Update template parameters with the user input
  templateParams.from_name = name.value;
  templateParams.from_email = email.value;
  templateParams.message = message.value;

  // Send the message via EmailJS
  emailjs.send("service_i655qdh", "template_u66ell8", templateParams)
    .then(function(response) {
      showAlert("Message sent successfully!", "success");
      // Clear form fields after successful submission
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch(function(error) {
      showAlert("Failed to send message. Please try again.", "error");
    });
}

// Function to show alert messages
function showAlert(message, type) {
  const alert = document.getElementById("alert");
  alert.innerHTML = message;
  alert.style.display = "flex";
  
  // Set alert color based on message type
  if (type === "success") {
    alert.style.backgroundColor = "green";
  } else {
    alert.style.backgroundColor = "red";
  }
  
  // Hide alert after 3 seconds
  setTimeout(function() {
    alert.style.display = "none";
  }, 3000);
}
