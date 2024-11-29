const getCategories = async () => {
    const urlCategories = "api/categories.php";
    const optionsCategories = {
        method : "get"
    };
    const selectCategories = document.querySelector("#cantorCategory");
    const response = await fetch(urlCategories, optionsCategories);
    const categories = await response.json();
    categories.forEach((category) => {
        const option = document.createElement("option");
        option.textContent = category.name;
        option.setAttribute("value", category.id);
        selectCategories.appendChild(option);
    });
};
getCategories();

const form = document.querySelector("#cantores-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const url = "api/cantores-insert.php";
    const options = {
        method: "post",
        body: formData
    };

    fetch(url, options).then((response) => {
        response.json().then((product) => {
            console.log(product)
        })
    });


});