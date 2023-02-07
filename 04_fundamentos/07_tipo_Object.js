const prod1 = {};
prod1.nome = 'Celular';
console.log(prod1); // { nome: 'Celular' }

const prod2 = {
  nome: 'Notebook',
  cor: 'Azul',
};
console.log(prod2.nome); // Notebook

const cliente1 = {
  nome: 'Daniel',
  favoritos: [prod1, prod2],
  endereco: {
    cidade: 'Franca',
    uf: 'SP',
    cep: '12345-678',
  },
};

console.log(cliente1.favoritos[0].nome); // Celular
console.log(cliente1.endereco.cep); // 12345-678
