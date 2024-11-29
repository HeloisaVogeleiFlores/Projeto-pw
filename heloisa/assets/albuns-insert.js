const getCantores= async () => {
    const urlCantores = "api/cantores.php";
    const optionsCantores = {
        method : "get"
    };
    const selectCantores = document.querySelector("#cantorAlbum");
    const response = await fetch(urlCantores, optionsCantores);
    const cantores = await response.json();
    cantores.forEach((cantor) => {
        const option = document.createElement("option");
        option.textContent = cantor.name;
        option.setAttribute("value", cantor.id);
        selectCantores.appendChild(option);
    });
};
getCantores();

const form = document.querySelector("#albuns-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const url = "api/albuns-insert.php";
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