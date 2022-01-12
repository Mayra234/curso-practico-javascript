console.group('Círculos');

//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
console.log('PI equivale a: ' + PI);

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Área
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

function calcularPerimetroCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = input.value;
  const perimetro = perimetroCirculo(value);

  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById('inputCirculo');
  const value = input.value;
  const area = areaCirculo(value);

  alert(area);
}
