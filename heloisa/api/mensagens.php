<?php

require "connection.php";

$post = filter_input_array(INPUT_POST);

$query = "INSERT INTO `mensagens`(`mensagem`, `idUsers`) VALUES (:mensagem, :idUsers)";
$stmt = $conn->prepare($query);
$stmt->bindParam("idUsers", $post["name"]);
$stmt->bindParam("mensagem", $post["comment"]);
$stmt->execute();

if($stmt->rowCount() != 1){
    $response = [
        "type" => "error",
        "message" => "Erro, o comentário não foi efetuado!"
    ];
    echo json_encode($response);
    exit;
}

$response = [
    "type" => "success",
    "message" => "Comentário feito com sucesso",
];
echo json_encode($response);