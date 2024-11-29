<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/mensagens.css">
    <script src="assets/mensagens.js" async></script>
    <title>Formulário de Comentários</title>
</head>
<body>

    <h2>Deixe seu Comentário</h2>

    <form id="commentForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" name="name" required>
        <br>

        <label for="comment">Comentário:</label>
        <textarea id="comment" name="comment"required></textarea>
        <br>

        <button type="submit">Enviar Comentário</button>
    </form>