const getCantores = async () => {
    const urlCantoresByName = "api/cantores.php";
    const optionsCantores = {
        method : "get"
    };
    const selectCantores = document.querySelector("#cantores");
    const response = await fetch(urlCantoresByName, optionsCantores);
    //console.log(response);
    const cantores = await response.json();
    //console.log(categories);
    cantores.forEach((cantor) => {
        const option = document.createElement("option");
        option.textContent = cantor.name;
        option.setAttribute("value", cantor.id);
        selectCantores.appendChild(option);
    });
};
getCantores();

const cantor = document.querySelector("#cantores");
cantor.addEventListener("change",() => {
    //console.log(cantor.value);
    const urlAlbunsByCantores = `api/albuns-by-cantores.php?cantoresId=${cantor.value}`;

    fetch(urlAlbunsByCantores, {method : "get"}).then((response) => {
        //console.log(response.json);
        response.json().then((albuns) => {
                console.log(albuns);
                const albunsList = document.querySelector("#albunsList");
                albunsList.innerHTML = '';
                albuns.forEach((album) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${album.id}</td><td>${album.nome}</td>`;
                albunsList.appendChild(tr);
            });
        });
     });
});

const albumName = document.querySelector("#albumName");
albumName.addEventListener("keyup", () => {
    if(albumName.value.length < 3){
        return;
    }

    const param = {
        "name" : albumName.value
    };
    const query = new URLSearchParams(param);
    const urlAlbunsByName = `api/albuns-by-name.php?${query.toString()}`;
    console.log(urlAlbunsByName);

    fetch(urlAlbunsByName, {method : "get"}).then((response) => {
        response.json().then((albuns) => {
            console.log(albuns);
            const albunsList = document.querySelector("#albunsList");
            albunsList.innerHTML = '';
            albuns.forEach((album) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${album.id}</td><td>${album.nome}</td>`;
            albunsList.appendChild(tr);
            });
        });
    });
});