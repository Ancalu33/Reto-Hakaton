const btnGuardar = document.getElementById('guardar')

const registro = (e) => {
    const personas = []
    e.preventDefault();
    const nombre = document.getElementById('nombre').value
    const correo = document.getElementById('correo').value
    const contraseña = document.getElementById('contraseña').value
    const persona = {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
    }
    console.log(persona);
    if (localStorage.getItem('persona') == null) {
        personas.push(persona)
        const personaString = JSON.stringify(personas)
        localStorage.setItem('persona', personaString)
    } else {
        const getPersonas = JSON.parse(localStorage.getItem('persona'));
        getPersonas.push(persona)
        const addPersona = JSON.stringify(getPersonas)
        localStorage.setItem('persona', addPersona)
    }
    window.locationf = "../login.html";

}



btnGuardar.addEventListener("click", registro);