const validaNota = (nota) => {
  if (nota >= 6) {
    return 'Aluno aprovado';
  } else {
    return 'Aluno reprovado';
  }
};

console.log(validaNota(9)); // Aluno aprovado
console.log(validaNota(4)); // Aluno reprovado
