const names = ['Celeborn', 'Finwe', 'Ecthelion', 'Feanor', 'Elrond'];

const filteredNames = names.filter(names => names.length <= 6);

console.log(names); // [ 'Celeborn', 'Finwe', 'Ecthelion', 'Feanor', 'Elrond' ]
console.log(filteredNames); // [ 'Finwe', 'Feanor', 'Elrond' ]
