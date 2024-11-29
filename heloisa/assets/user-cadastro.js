// capturar o form

const form = document.querySelector('.form-user-cadastro');
const button = document.querySelector('button');

form.addEventListener('submit', event => {
    event.preventDefault();
    const url = 'api/user-cadastro.php';
    const options = {
        method: 'POST',
        body: new FormData(form)
    };

/*button.addEventListener('click', ()=> {
    event.preventDefault();
    setTimeout(async () => {
        window.location.href = "inicio.php";
    }, 2000);
})*/

   fetch(url, options).then(response => {
    response.json().then(response => {
        console.log(response);

        if (response.type == "success") {
            window.location.href = "user-login.php";
        }
    })
   })

});
/*
fetch(url, options).then(response => response.json()).then((data) => {
    console.log(data);
    console.log(data.user.name, data.user.email);


});
*/
