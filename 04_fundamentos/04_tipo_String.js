const escola = 'Cod3r';

const frase = 'Seja bem vindo';

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // ''
console.log(escola.toLocaleUpperCase()); // COD3R
console.log(escola.indexOf('d')); // 2
console.log(escola.substring(2)); // d3r
console.log(escola.substring(0, 3)); // Cod
console.log(escola.concat('!!!')); // Cod3r!!!
console.log(escola.replace(3, 'e')); // Coder
console.log(frase.split(' ')); // [ 'Seja', 'bem', 'vindo' ]
console.log('3' + 2); // 32

let nome = 'Daniel';

console.log('Olá, me chamo ' + nome); // Olá, me chamo Daniel
console.log('Olá, me chamo', nome); // Olá, me chamo Daniel
console.log(`Olá, me chamo ${nome}`); // Olá, me chamo Daniel
