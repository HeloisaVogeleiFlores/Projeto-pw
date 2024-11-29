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

$query = "INSERT INTO albuns (id, nome, idCantores) VALUES (NULL, :nome, :cantores_id)";
$stmt = $conn->prepare($query);
//$stmt->bindParam("id", $post["id"]);
$stmt->bindParam("nome", $post["albumName"]);
$stmt->bindParam("cantores_id",$post["cantorAlbum"]);
//$stmt->bindParam("ano", $post["ano"]);
$stmt->execute();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Álbum não cadastrado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
   "type" => "success",
   "message" => "Álbum cadastrado com sucesso!"
];

echo json_encode($response);