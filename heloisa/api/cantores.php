<?php

require "connection.php";

$query = "SELECT * FROM cantores";
$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());