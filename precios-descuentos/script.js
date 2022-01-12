function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

// console.log({
//   precioOriginal,
//   miDescuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });

function priceDiscount() {
  const inputPrice = document.getElementById('inputPrice');
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById('inputDiscount');
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultPrice = document.getElementById('resultPrice');
  resultPrice.innerText =
    'El precio con descuento son : $' + precioConDescuento;
}
