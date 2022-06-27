const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (item) => item.length === 5;
  // console.log('nao tem 5 letras');

// console.log(findNameWithFiveLetters(names[1]));
const isFive = names.find(findNameWithFiveLetters);

console.log(names.find(isFive));