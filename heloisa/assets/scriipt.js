const getCategories = async () => {
    const urlCategories = "api/categories.php";
    const optionsCategories = {
        method : "get"
    };
    const selectCategories = document.querySelector("#category");
    const response = await fetch(urlCategories, optionsCategories);
    //console.log(response);
    const categories = await response.json();
    //console.log(categories);
    categories.forEach((category) => {
        const option = document.createElement("option");
        option.textContent = category.name;
        option.setAttribute("value", category.id);
        selectCategories.appendChild(option);
    });
};
getCategories();

const category = document.querySelector("#category");
category.addEventListener("change",() => {
    console.log(category.value);
    // api/products-by-category.php?categoryId=2
    const urlCantoresByCategory = `api/cantores-by-categories.php?categoryId=${category.value}`;
    //console.log(urlProductsByCategory);
    fetch(urlCantoresByCategory, {method : "get"}).then((response) => {
        //console.log(response);
        response.json().then((cantores) => {
            console.log(cantores);
            const cantoresList = document.querySelector("#cantoresList");
            cantoresList.innerHTML = '';
            cantores.forEach((cantor) => {
                //console.log(cantor);
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${cantor.id}</td><td>${cantor.name}</td>`;
                cantoresList.appendChild(tr);
            });
        });
    });
});

const artistaName = document.querySelector("#artistaName");
artistaName.addEventListener("keyup", () => {
    if(artistaName.value.length < 3){
        return;
    }

    const param = {
        "name" : artistaName.value
    };
    const query = new URLSearchParams(param);
    const urlCantoresByName = `api/cantores-by-name.php?${query.toString()}`;

    fetch(urlCantoresByName, {method : "get"}).then((response) => {
        response.json().then((cantores) => {
            const cantoresList = document.querySelector("#cantoresList");
            cantoresList.innerHTML = '';
            cantores.forEach((cantor) => {
                console.log(cantor);
                const tr = document.createElement("tr");
                tr.innerHTML = `<td>${cantor.id}</td><td>${cantor.name}</td>`;
                cantoresList.appendChild(tr);
            });
        });
    });
});