<?php

require "connection.php";

$query = "SELECT * FROM albuns";
$stmt = $conn->query($query);

echo json_encode($stmt->fetchAll());