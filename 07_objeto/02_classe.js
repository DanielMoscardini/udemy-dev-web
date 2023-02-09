class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falarOi() {
    console.log(`Ola, meu nome é ${this.nome}`);
  }
}
console.log(typeof Pessoa); // function

const pessoa1 = new Pessoa('Daniel', 22);
console.log(typeof pessoa1); // object
console.log(pessoa1); // Pessoa { nome: 'Daniel', idade: 22 }
pessoa1.falarOi(); // Ola, meu nome é Daniel
