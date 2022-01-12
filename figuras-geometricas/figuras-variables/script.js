//Código del cuadrado
console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');
console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm');
console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');

console.groupEnd();

//Código del triángulo
console.group('Triángulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriandulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo + alturaTriangulo) / 2;

console.log(
  'Los lados del triángulo miden: ' +
    ladoTriangulo1 +
    'cm, ' +
    ladoTriangulo2 +
    'cm, ' +
    baseTriangulo +
    'cm'
);
console.log('La altura del triángulo es: ' + alturaTriangulo);
console.log('El perímetro del triángulo es: ' + perimetroTriandulo + 'cm');
console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2');

console.groupEnd();

//Código del círculo
console.group('Círculos');

//Radio
const radioCirculo = 4;
console.log('El radio del círculo es: ' + radioCirculo + 'cm');

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del círculo es: ' + diametroCirculo + 'cm');

//PI
const PI = Math.PI;
console.log('PI equivale a: ' + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cm');

//Área
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log('El radio del círculo es: ' + radioCirculo + 'cm');

console.groupEnd();
