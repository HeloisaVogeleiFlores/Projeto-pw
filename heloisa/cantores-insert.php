<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/cantores-insert.css">
    <script src="assets/insert-cantores.js" async></script>
    <title>Formulário de Inclusão de Cantores</title>
</head>

<body>
<div class="container">
    <h1>Formulário de Inclusão de Cantores</h1>
    <form id="cantores-form">
        <label for="singerName">Nome do Cantor:</label>
        <input type="text" id="singerName" name="singerName">
        <label for="cantorCategory">Categoria:</label>
        <select id="cantorCategory" name="cantorCategory">
            <option value="">Selecione uma Categoria</option>
        </select>
        <button type="submit">Adicionar Cantor</button>
    </form>
</div>
</body>
</html>