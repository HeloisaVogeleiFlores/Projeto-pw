<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/albuns.css">
    <script src="assets/albuns.js" async></script>
    <title>Listen a Music</title>
</head>
<body>
<div class="links">
        <div class="btncantor"><a href="inicio.php">Cantores</a></div>
        <div class="btnmusic"><a href="music.php">Músicas</a></div>
        <div class="btnalbuns"><a href="albuns.php">Álbuns</a></div>
        <div class="btnalbuns"><a href="mensagem.php">Fazer Comentários</a></div>
    </div>
<div class="container">
    <h1>Lista de Álbuns</h1>
    <div class="filter">
        <label for="cantores">Cantor:</label>
        <select id="cantores">
            
        </select>
        <label for="albumName">Nome do álbum:</label>
        <input type="text" id="albumName">
    </div>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Nome do Álbum</th>
        </tr>
        </thead>
        <tbody id="albunsList">

        </tbody>
    </table>
</div>
</body>
</html>