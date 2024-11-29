<?php

require "connection.php";

$post = filter_input_array(INPUT_POST);

if(in_array("",$post)){
    $response = [
        "type" => "error",
        "message" => "Preencha todos os campos"
    ];
    echo json_encode($response);
    exit;
}

$query = "INSERT INTO cantores VALUES (NULL, :nome, :category_id)";
$stmt = $conn->prepare($query);
$stmt->bindParam("nome", $post["singerName"]);
$stmt->bindParam("category_id",$post["cantorCategory"]);
$stmt->execute();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Cantor não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
   "type" => "success",
   "message" => "Cantor cadastrado com sucesso!"
];

echo json_encode($response);