const a = { nome: 'daniel' };
const b = a;
b.nome = 'Carlos';
console.log(a.nome); // Carlos

let c = 3;
let d = c;
d++;
console.log(d); // 4
console.log(c); // 3
