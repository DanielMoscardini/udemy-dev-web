const validaNota = (nota) => {
  if (nota >= 6) {
    return 'Aluno passou de ano!';
  }
};

console.log(validaNota(7)); // Aluno passou de ano!
console.log(validaNota(4)); // undefined
