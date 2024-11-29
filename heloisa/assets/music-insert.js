const getCantores= async () => {
    const urlAlbuns = "api/albuns.php";
    const optionsAlbuns = {
        method : "get"
    };
    const selectAlbuns = document.querySelector("#musicAlbum");
    const response = await fetch(urlAlbuns, optionsAlbuns);
    const albuns = await response.json();
    albuns.forEach((album) => {
        const option = document.createElement("option");
        option.textContent = album.nome;
        option.setAttribute("value", album.id);
        selectAlbuns.appendChild(option);
    });
};
getCantores();

const form = document.querySelector("#musicas-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const url = "api/music-insert.php";
    const options = {
        method: "post",
        body: formData
    };

    fetch(url, options).then((response) => {
        response.json().then((albuns) => {
            console.log(albuns)
        })
    });


});