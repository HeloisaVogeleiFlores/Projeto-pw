<?php

require "connection.php";

$name = filter_input(INPUT_GET, "name");

$query = "SELECT * 
          FROM musics 
          WHERE nome LIKE :nome";

$stmt = $conn->prepare($query);
$stmt->bindValue("nome", "%{$name}%");
$stmt->execute();

echo json_encode($stmt->fetchAll());