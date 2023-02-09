const verificaNome = (nome) => {
  try {
    console.log(nome);
  } catch (e) {
    throw new Error('deu pau!');
  } finally {
    console.log('fim da funca');
  }
};

verificaNome();
