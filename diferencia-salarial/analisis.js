// Helpers

function esPar(number) {
  return number % 2 === 0;
}

function calcularMediaAritmetica(list) {
  const sumaLista = list.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / list.length;
  return promedioLista;
}

// Calculador de mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personMitad1 = lista[mitad];
    const personMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personMitad1, personMitad2]);
    return mediana;
  } else {
    const personMitad = lista[mitad];
    return personMitad;
  }
}

// Mediana General

const salariosCol = colombia.map(function (person) {
  return person.salary;
});

const salarioColSorted = salariosCol.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salarioColSorted);

// Mediana del Top 10%

const spliceStar = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStar;

const salariosColTop10 = salarioColSorted.splice(spliceStar, spliceCount);

const medianaTop10 = medianaSalarios(salariosColTop10);

console.log({ medianaGeneralCol, medianaTop10 });
