let hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];
let ultimoHobbit = hobbits[3];

console.log(hobbits[0]); // Frodo
console.log(hobbits[4]); // undefined
console.log(hobbits.join(' ')); // Frodo Sam Merry Pippin
console.log(hobbits.length); // 4
console.log(hobbits.push('Bilbo')); // [ 'Frodo', 'Sam', 'Merry', 'Pippin', 'Bilbo' ]
console.log(hobbits.pop(), hobbits); // Bilbo [ 'Frodo', 'Sam', 'Merry', 'Pippin' ]
console.log(typeof hobbits); // object
console.log(ultimoHobbit); // Pippin
