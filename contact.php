<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data and sanitize
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Basic validation
    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Email details
        $to = "boubakrielaa4@gmail.com"; // Replace with your email address
        $subject = "New Contact Form Submission";
        $headers = "From: $email";

        // Message content
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send the message. Please try again later.";
        }
    } else {
        echo "Please ensure all fields are filled out correctly.";
    }
} else {
    echo "Invalid request.";
}
?>

