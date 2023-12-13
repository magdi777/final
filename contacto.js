document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    // Manejar el evento submit del formulario
    contactForm.addEventListener('submit', function (event) {
      // Evitar que se envíe el formulario de manera predeterminada
      event.preventDefault();
  
      // Validar el formulario antes de enviarlo
      if (validateForm()) {
        // Mensaje de envío en proceso
        alert('Enviando formulario...');
  
        // Simular el envío al servidor (puedes reemplazar esto con la lógica real del servidor)
        setTimeout(function () {
          // Mensaje de éxito después del envío (simulado)
          alert('¡Formulario enviado con éxito!');
        }, 1000); // Simula un tiempo de espera de 1 segundo (puedes ajustar según sea necesario)
      }
    });
  
  
    function validateForm() {
      // Validar nombre
      const nombre = document.getElementById('nombre').value;
      if (!nombre.trim()) {
        alert('Por favor, ingresa tu nombre.');
        return false;
      }
  
      // Validar apellido
      const apellido = document.getElementById('apellido').value;
      if (!apellido.trim()) {
        alert('Por favor, ingresa tu apellido.');
        return false;
      }
  
      // Validar correo electrónico
      const correo = document.getElementById('correo').value;
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
      }
  
      // Validar número de celular
      const celular = document.getElementById('celular').value;
      const celularRegex = /^\d{8}$/;
      if (!celularRegex.test(celular)) {
        alert('Por favor, ingresa un número de celular válido de 8 dígitos.');
        return false;
      }
  
      // Validar mensaje
      const mensaje = document.getElementById('mensaje').value;
      if (!mensaje.trim()) {
        alert('Por favor, ingresa un mensaje.');
        return false;
      }
  
      // Todas las validaciones pasaron
      return true;
    }
  });
  