// botaozin
const form = document.querySelector("#commentForm")
const botaozin = document.querySelector("button");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url = 'api/mensagens.php';
    const options = {
        method: 'POST',
        body: new FormData(form)
    };
    fetch(url, options).then(response => response.json()).then((data) => {
        console.log(data);
        //console.log(response);
    });
});