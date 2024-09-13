<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Handle task retrieval
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $query = "SELECT * FROM tasks";
  $result = mysqli_query($conn, $query);

  $tasks = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $tasks[] = $row;
  }

  echo json_encode($tasks);
}

// Close connection
mysqli_close($conn);
?>