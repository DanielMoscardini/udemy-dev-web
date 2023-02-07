const peso1 = 1.0;
const peso2 = Number('1.1');

console.log(Number.isInteger(peso1)); // true
console.log(Number.isInteger(peso2)); // false

const media = 6.7598;
console.log(media.toFixed(2)); // 6.75

console.log(7 / 0); // Infinity
console.log('10' / 2); // 5
console.log('Show' * 2); // NaN
console.log(0.7 + 0.1); // 0.7999999999999999
console.log(typeof Number); // function

const raio = 4;
const area = Math.PI * Math.pow(raio, 2);
console.log(area.toFixed(2)); //50.27
