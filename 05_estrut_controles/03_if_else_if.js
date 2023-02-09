const validaNotaAprimorado = (nota) => {
  if (nota >= 6) {
    return 'Aluno Aprovado';
  } else if (nota >= 3 && nota < 6) {
    return 'Aluno de Recuperacao';
  } else {
    return 'Aluno Reprovado';
  }
};

console.log(validaNotaAprimorado(10)); // Aluno Aprovado
console.log(validaNotaAprimorado(5)); // Aluno de Recuperacao
console.log(validaNotaAprimorado(2.9)); // Aluno Reprovado
