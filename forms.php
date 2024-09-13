<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fields = $_POST["fields"];
  $bed_number = $_POST["bed_number"];
  $weight = $_POST["weight"];

  $query = "INSERT INTO forms (fields, bed_number, weight) VALUES ('$fields', '$bed_number', '$weight')";
  mysqli_query($conn, $query);

  echo "Form submitted successfully!";
}

// Close connection
mysqli_close($conn);
?>