const whiteCouncil = ['Gandalf', 'Galadriel', 'Saruman', 'Elrond', 'Cirdan'];
console.log(whiteCouncil); // [ 'Gandalf', 'Galadriel', 'Saruman', 'Elrond', 'Cirdan'

whiteCouncil.pop();
console.log(whiteCouncil); // [ 'Gandalf', 'Galadriel', 'Saruman', 'Elrond', ]

whiteCouncil.push('Legolas');
console.log(whiteCouncil); // [ 'Gandalf', 'Galadriel', 'Saruman', 'Elrond', 'Legolas' ]

whiteCouncil.shift();
console.log(whiteCouncil); // [ 'Galadriel', 'Saruman', 'Elrond', 'Legolas' ]

whiteCouncil.unshift('Finwe');
console.log(whiteCouncil); // ['Finwe', 'Galadriel', 'Saruman', 'Elrond', 'Legolas' ]
