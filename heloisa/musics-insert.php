<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/cantores-insert.css">
    <script src="assets/music-insert.js" async></script>
    <title>Formulário de Inclusão de Músicas</title>
</head>

<body>
<div class="container">
    <h1>Formulário de Inclusão de Músicas</h1>
    <form id="musicas-form">
        <label for="musicName">Nome da Música:</label>
        <input type="text" id="musicName" name="musicName">
        <label for="musicAlbum">Álbum:</label>
        <select id="musicAlbum" name="musicAlbum">
            <option value="">Selecione um Álbum</option>
        </select>
        <button type="submit">Adicionar Música</button>
    </form>
</div>
</body>
</html>