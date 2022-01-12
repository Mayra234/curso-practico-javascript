const lista = [1, 2, 2, 4, 2, 5, 4, 26, 7];

const listaCount = {};

lista.map(function (element) {
  if (listaCount[element]) {
    listaCount[element] += 1;
  } else {
    listaCount[element] = 1;
  }
});

const listaArray = Object.entries(listaCount).sort(function (
  valorAcumulado,
  nuevoValor
) {
  valorAcumulado - nuevoValor;
});
