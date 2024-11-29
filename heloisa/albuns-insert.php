<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/cantores-insert.css">
    <script src="assets/albuns-insert.js" async></script>
    <title>Formulário de Inclusão de Álbuns</title>
</head>

<body>
<div class="container">
    <h1>Formulário de Inclusão de Álbuns</h1>
    <form id="albuns-form">
        <label for="albumName">Nome do Álbum:</label>
        <input type="text" id="albumName" name="albumName">
        <label for="cantorAlbum">Cantor:</label>
        <select id="cantorAlbum" name="cantorAlbum">
            <option value="">Selecione o Cantor</option>
        </select>
        <button type="submit">Adicionar Álbum</button>
    </form>
</div>
</body>
</html>