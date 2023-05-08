<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $contact = $_POST['contact'];
    $nationality = $_POST['nationality'];
    $email = $_POST['email'];
    $package = $_POST['package'];

    echo '<script>alert("Hi")</script>';
}
?>