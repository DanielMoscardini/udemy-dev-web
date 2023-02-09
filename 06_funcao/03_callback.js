const notas = [6.7, 4, 8.9, 10, 3.5];

// Sem callback
let notasBaixas = [];

for (i in notas) {
  if (notas[i] <= 6) {
    notasBaixas.push(notas[i]);
  }
}
console.log(notasBaixas); // [ 4, 3.5 ]

// Com callback
notasBaixasCallback = notas.filter((nota) => nota < 6);
console.log(notasBaixasCallback); // [ 4, 3.5 ]
