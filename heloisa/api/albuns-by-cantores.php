<?php

require "connection.php";

$idCantores = filter_input(INPUT_GET, "cantoresId");

$query = "SELECT * FROM albuns WHERE idCantores = :cantores_id";
$stmt = $conn->prepare($query);
$stmt->bindParam("cantores_id", $idCantores);
$stmt->execute();

echo json_encode($stmt->fetchAll());