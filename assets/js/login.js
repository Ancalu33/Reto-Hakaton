const btnLogin = document.getElementById('login')

const login = (e) => {
    e.preventDefault();
    const correo = document.getElementById('correo').value
    const contraseña = document.getElementById('contraseña').value

    const getPersona = JSON.parse(localStorage.getItem("persona"))
    console.log(getPersona);

    if (getPersona.find(user => user.correo == correo && user.contraseña == contraseña)) {
        swal({
            title: "Bienvenido",
            text: " ",
            icon: "success",
            buttons: false
        });
        setTimeout(function () {
            location.href = "/Reto-Hakaton/index.html"
        }, 1000);
    } else {
        swal("Usuario o Contraseña Erroneo", "Intentelo de nuevo!", "error");
        setTimeout(function () {
            location.href = "login.html"
        }, 1000);
    }
}

btnLogin.addEventListener("click", login)