var numero = 1;

{
  let numero = 2;
  console.log(`Dentro do bloco: ${numero}`); // Dentro do bloco: 2
}

console.log(`Fora do bloco: ${numero}`); // Dentro do bloco: 1
