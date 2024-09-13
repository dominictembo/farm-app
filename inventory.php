<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database");

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Handle inventory retrieval
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $query = "SELECT * FROM inventory";
  $result = mysqli_query($conn, $query);

  $inventory = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $inventory[] = $row;
  }

  echo json_encode($inventory);
}

// Close connection
mysqli_close($conn);
?>