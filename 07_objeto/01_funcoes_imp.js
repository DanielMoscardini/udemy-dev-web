const pessoa = {
  nome: 'Daniel',
  idade: 22,
  sexo: 'Masculino',
};

console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'sexo' ]
console.log(Object.values(pessoa)); // [ 'Daniel', 22, 'Masculino' ]
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Daniel' ], [ 'idade', 22 ], [ 'sexo', 'Masculino' ] ]

Object.entries(pessoa).forEach(([chave, valor]) =>
  console.log(`${chave}: ${valor}`)
);
/*
nome: Daniel
idade: 22
sexo: Masculino
*/

Object.defineProperty(pessoa, 'dtNascimento', {
  enumerable: true,
  writable: true,
  value: '13/02/2001',
});
console.log(pessoa.dtNascimento); // 13/02/2001

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3 };
const obj = Object.assign(dest, o1, o2);
console.log(obj); // { a: 1, b: 2, c: 3 }
