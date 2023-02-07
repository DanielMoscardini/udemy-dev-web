let isAtivo = 1;
console.log(!1); // false

console.log(!!1); // true
console.log(!!-1); // true
console.log(!!' '); // true
console.log(!!'texto'); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true

console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
