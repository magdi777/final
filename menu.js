// Obtener elementos del DOM
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');

// Variable para almacenar los productos en el carrito
let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(event) {
  const donut = event.target.parentNode;
  const donutName = donut.querySelector('h3').textContent;
  const donutPrice = parseFloat(donut.querySelector('p:last-of-type').textContent.split(': ')[1]);

  // Crear objeto de producto
  const item = { name: donutName, price: donutPrice };

  // Agregar producto al carrito
  cartItems.push(item);

  // Actualizar el contador del carrito
  cartCount.textContent = cartItems.length;

  // Habilitar el botón de eliminación para este producto
  const removeButton = donut.querySelector('.remove-from-cart');
  removeButton.disabled = false;

  // Asignar evento click al botón de eliminación
  removeButton.addEventListener('click', removeFromCart.bind(null, item));
}

// Función para eliminar un producto del carrito
function removeFromCart(item) {
  const itemIndex = cartItems.indexOf(item);
  if (itemIndex > -1) {
    cartItems.splice(itemIndex, 1);
  }

  // Actualizar el contador del carrito
  cartCount.textContent = cartItems.length;

  // Deshabilitar el botón de eliminación
  const removeButton = document.querySelector('.remove-from-cart');
  removeButton.disabled = true;
}

// Asignar evento click al icono del carrito
cartIcon.addEventListener('click', () => {
  // Mostrar productos en un messagebox
  if (cartItems.length === 0) {
    alert("El carrito está vacío");
  } else {
    let message = "Productos en el carrito:\n";
    cartItems.forEach(item => {
      message += `${item.name} - Precio: Bs ${item.price}\n`;
    });
    alert(message);
  }
});

// Obtener todos los botones de "Agregar" en el menú
const addToCartButtons = document.querySelectorAll('.donut .add-to-cart');

// Asignar evento click a los botones de "Agregar" en el menú
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});