let thisNormal = function (param) {
  console.log(param === this);
};
thisNormal(global); // true

let thisArrow = (param) => console.log(param === this);
thisArrow(global); // false
