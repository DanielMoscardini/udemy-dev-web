// Criar funcao de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function () {};

// Armazenar em um array.
const array = [fun2];

// Armazenar em um atributo de objeto.
const obj = {
  falar: function () {
    return 'opa';
  },
};

// Passar funcao como parametro.
function run(func) {
  func();
}

run(function () {
  console.log('Executando');
}); // Executando

// Uma funcao pode conter/retornar uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(2); // 7
