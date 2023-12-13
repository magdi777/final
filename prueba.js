// Obtener el formulario de donut
const donutForm = document.getElementById('donut-form');

// Agregar un evento de escucha para el envío del formulario
donutForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores de los campos de entrada
  const username = document.getElementById('username').value;
  const sabor = document.getElementById('username').value;
  const relleno = document.getElementById('username').value;
  const glaseado = document.getElementById('username').value;
  const topping = document.getElementById('username').value;

  // Realizar cualquier acción que necesites con los valores del formulario
  // Por ejemplo, puedes enviar los datos a través de una solicitud AJAX

  // Mostrar una alerta de que se envió el mensaje
  alert('El mensaje fue enviado con éxito.');

  // Restablecer el formulario
  donutForm.reset();
});