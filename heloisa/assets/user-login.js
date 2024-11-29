// capturar o form

const form = document.querySelector('.form-user-login');
const button = document.querySelector('button');

form.addEventListener('submit', event => {
    event.preventDefault();
    const url = 'api/user-login.php';
    const options = {
        method: 'POST',
        body: new FormData(form)
    };
    fetch(url, options).then(response => response.json()).then((response) => {
        console.log(response);

        if (response.user.status == 1){
            window.location.href = "adm/admin.php";
            exit;
        }

        if (response.type == "success"){
            window.location.href = "inicio.php"
        }
    });
});
