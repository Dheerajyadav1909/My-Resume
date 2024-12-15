<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from the form
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email settings
    $to = "yadavdheeraj1712@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message from your website contact form:\n\n".
            "Name: $name\n".
            "Email: $email\n\n".
            "Message:\n$message";
    $headers = "From: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message, $name. We'll get back to you shortly!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
