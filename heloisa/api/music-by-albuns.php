<?php

require "connection.php";

$idAlbuns = filter_input(INPUT_GET, "albunsId");

$query = "SELECT * FROM musics WHERE idAlbuns = :albuns_id";
$stmt = $conn->prepare($query);
$stmt->bindParam("albuns_id", $idAlbuns);
$stmt->execute();

echo json_encode($stmt->fetchAll());