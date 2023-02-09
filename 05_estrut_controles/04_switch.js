const verificaEscolha = (numero) => {
  switch (numero) {
    case 1:
      return 'Escolheu numero 1';
      break;
    case 2:
      return 'Escolheu numero 2';
      break;
    default:
      return 'Outro numero alem de 1 ou 2';
  }
};

console.log(verificaEscolha(1)); // Escolheu numero 1
console.log(verificaEscolha(2)); // Escolheu numero 2
console.log(verificaEscolha(3)); // Outro numero alem de 1 ou 2
