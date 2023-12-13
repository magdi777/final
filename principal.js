// Agrega un script para manejar la funcionalidad de "Leer Más" y "Leer Menos"
function mostrarReceta(idEntrada) {
    let botonLeerMas = document.querySelector(`#${idEntrada} .leer-mas`);
    let botonLeerMenos = document.querySelector(`#${idEntrada} .leer-menos`);
    let receta = document.querySelector(`#${idEntrada} .receta`);

    botonLeerMas.style.display = 'none';
    botonLeerMenos.style.display = 'block';
    receta.style.display = 'block';
}

function ocultarReceta(idEntrada) {
    let botonLeerMas = document.querySelector(`#${idEntrada} .leer-mas`);
    let botonLeerMenos = document.querySelector(`#${idEntrada} .leer-menos`);
    let receta = document.querySelector(`#${idEntrada} .receta`);

    botonLeerMas.style.display = 'block';
    botonLeerMenos.style.display = 'none';
    receta.style.display = 'none';
}

function suscribirse() {
    // Obtén el valor del correo electrónico
    var correoElectronico = document.getElementById("correoElectronico").value;

    // Validación simple de correo electrónico
    if (!validarCorreoElectronico(correoElectronico)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return;
    }

    // Puedes realizar aquí una solicitud al servidor para almacenar la dirección de correo electrónico en tu base de datos (backend).

    // Muestra un mensaje de alerta
    alert("¡Te has suscrito correctamente! Recibirás notificaciones de la tienda.");
}

function validarCorreoElectronico(correo) {
    // Puedes utilizar una expresión regular u otras validaciones según tus necesidades
    var expresionRegularCorreo = /\S+@\S+\.\S+/;
    return expresionRegularCorreo.test(correo);
}


// Agrega un script para manejar la funcionalidad de "Leer Más" y "Leer Menos"
function mostrarReceta(idEntrada) {
    let botonLeerMas = document.querySelector(`#${idEntrada} .leer-mas`);
    let botonLeerMenos = document.querySelector(`#${idEntrada} .leer-menos`);
    let receta = document.querySelector(`#${idEntrada} .receta`);

    botonLeerMas.style.display = 'none';
    botonLeerMenos.style.display = 'block';
    receta.style.display = 'block';
}

function ocultarReceta(idEntrada) {
    let botonLeerMas = document.querySelector(`#${idEntrada} .leer-mas`);
    let botonLeerMenos = document.querySelector(`#${idEntrada} .leer-menos`);
    let receta = document.querySelector(`#${idEntrada} .receta`);

    botonLeerMas.style.display = 'block';
    botonLeerMenos.style.display = 'none';
    receta.style.display = 'none';
}


// Agrega un script para manejar la funcionalidad de comentarios
let formularioComentario = document.getElementById("formulario-comentario-entrada1");
let comentarios = document.getElementById("comentarios-entrada1");

formularioComentario.addEventListener("submit", function (event) {
    event.preventDefault();
    let nuevoComentario = document.createElement("div");
    nuevoComentario.textContent = formularioComentario.querySelector("textarea").value;
    comentarios.appendChild(nuevoComentario);
    formularioComentario.reset();
});

