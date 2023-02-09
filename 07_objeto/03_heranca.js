class Avo {
  sobrenome;

  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Programador') {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor(sobrenome, profissao) {
    super(sobrenome, profissao);
  }
}

const filho1 = new Filho('Moscardini', 'Desempregado');
console.log(filho1); // Filho { sobrenome: 'Moscardini', profissao: 'Desempregado' }

const filho2 = new Filho('Bolonha');
console.log(filho2); // Filho { sobrenome: 'Bolonha', profissao: 'Programador' }
