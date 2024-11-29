<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/inicio.css">
    <script src="assets/scriipt.js" async></script>
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
    <h1>Lista de Cantores</h1>
    <div class="filter">
        <label for="category">Categoria:</label>
        <select id="category">
           
        </select>
        <label for="artistaName">Nome do artista:</label>
        <input type="text" id="artistaName">
    </div>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Nome do Artista</th>
        </tr>
        </thead>
        <tbody id="cantoresList">
        
        </tbody>
    </table>
</div>
</body>
</html>