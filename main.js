// Initialize EmailJS
(function() {
    emailjs.init("j5vu2qRA6sVjadX3w"); // Replace with your EmailJS public key
})();

// Function to validate form fields
function validateForm(name, email, message) {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        showAlert("All fields are required.", "error");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.trim())) {
        showAlert("Please enter a valid email address.", "error");
        return false;
    }
    return true;
}

// Function to display alert messages
function showAlert(message, type) {
    const alert = document.getElementById("alert");
    alert.style.display = "block";
    alert.textContent = message;

    alert.style.backgroundColor = type === "success" ? "green" : "red";
    alert.style.color = "white";

    setTimeout(() => {
        alert.style.display = "none";
    }, 3000);
}

// Function to submit the form
function submitMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!validateForm(name, email, message)) {
        return;
    }

    // Prepare email template parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email via EmailJS
    emailjs.send("service_i655qdh", "template_u66ell8", templateParams)
        .then(() => {
            showAlert("Message sent successfully!", "success");
            saveToExcel({ name, email, message });
            clearForm();
        })
        .catch((error) => {
            console.error("Error:", error);
            showAlert("Failed to send message. Please try again.", "error");
        });
}

// Function to send data to the server for Excel storage
function saveToExcel(data) {
    fetch("https://script.google.com/macros/s/AKfycbzc-8nFYB3R1RNCmG5S5MIt01xjShVf0JraG8wJ0dd8CTwnbpZUbiifOUbwNRqah0Y/exec", { // Replace with your backend URL
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log("Saved to Excel:", result);
    })
    .catch(error => {
        console.error("Failed to save data:", error);
    });
}

// Function to clear form fields
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
