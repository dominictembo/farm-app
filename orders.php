<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Handle order submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $order_details = $_POST["order_details"];
  $client_id = $_POST["client_id"];

  $query = "INSERT INTO orders (details, client_id) VALUES ('$order_details', '$client_id')";
  mysqli_query($conn, $query);

  echo "Order submitted successfully!";
}

// Close connection
mysqli_close($conn);
?>
