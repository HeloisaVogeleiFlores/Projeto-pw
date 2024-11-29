const getCantores = async () => {
    const urlAlbunsByName = "api/albuns.php";
    const optionsAlbuns = {
        method : "get"
    };
    const selectAlbuns = document.querySelector("#albuns");
    const response = await fetch(urlAlbunsByName, optionsAlbuns);
    //console.log(response);
    const albuns = await response.json();
    //console.log(categories);
    albuns.forEach((album) => {
        const option = document.createElement("option");
        option.textContent = album.nome;
        option.setAttribute("value", album.id);
        selectAlbuns.appendChild(option);
    });
};
getCantores();

const album = document.querySelector("#albuns");
album.addEventListener("change",() => {
    console.log(album.value);
    const urlMusicByAlbuns = `api/music-by-albuns.php?albunsId=${album.value}`;

    fetch(urlMusicByAlbuns, {method : "get"}).then((response) => {
        //console.log(response.json);
        response.json().then((musics) => {
                console.log(musics);
                const musicList = document.querySelector("#musicList");
                musicList.innerHTML = '';
                musics.forEach((music) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${music.id}</td><td>${music.nome}</td>`;
                musicList.appendChild(tr);
            });
        });
     });
});

const musicName = document.querySelector("#musicName");
musicName.addEventListener("keyup", () => {
    if(musicName.value.length < 3){
        return;
    }

    const param = {
        "name" : musicName.value
    };
    const query = new URLSearchParams(param);
    const urlMusicsByName = `api/music-by-name.php?${query.toString()}`;
    console.log(urlMusicsByName);

    fetch(urlMusicsByName, {method : "get"}).then((response) => {
        response.json().then((musics) => {
            console.log(musics);
            const musicList = document.querySelector("#musicList");
            musicList.innerHTML = '';
            musics.forEach((music) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${music.id}</td><td>${music.nome}</td>`;
            musicList.appendChild(tr);
            });
        });
    });
});