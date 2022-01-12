console.group('Triángulos');

function perimetroTriandulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

function calcularPerimetroTriangulo() {
  const inputTrianguloLado1 = document.getElementById('inputTrianguloLado1');
  const inputTrianguloLado2 = document.getElementById('inputTrianguloLado2');
  const inputTrianguloBase = document.getElementById('inputTrianguloBase');
  const valueInputTrianguloLado1 = parseFloat(inputTrianguloLado1.value);
  const valueInputTrianguloLado2 = parseFloat(inputTrianguloLado2.value);
  const valueInputTrianguloBase = parseFloat(inputTrianguloBase.value);
  const perimetro = perimetroTriandulo(
    valueInputTrianguloLado1,
    valueInputTrianguloLado2,
    valueInputTrianguloBase
  );
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const inputTrianguloLado1 = document.getElementById('inputTrianguloLado1');
  const inputTrianguloLado2 = document.getElementById('inputTrianguloLado2');
  const inputTrianguloBase = document.getElementById('inputTrianguloBase');
  const valueInputTrianguloLado1 = parseFloat(inputTrianguloLado1.value);
  const valueInputTrianguloLado2 = parseFloat(inputTrianguloLado2.value);
  const valueInputTrianguloBase = parseFloat(inputTrianguloBase.value);
  const area = areaTriangulo(
    valueInputTrianguloLado1,
    valueInputTrianguloLado2,
    valueInputTrianguloBase
  );

  alert(area);
}
