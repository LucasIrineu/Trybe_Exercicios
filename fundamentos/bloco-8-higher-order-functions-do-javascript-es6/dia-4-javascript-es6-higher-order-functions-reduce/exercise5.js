const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => {
    // console.log('split: ', curr.split(''))
    return acc + curr.split('').reduce((acc2, curr2) => {
      if (curr2 === 'A' || curr2 === 'a') {
        return acc2 + 1;
      }
      return acc2;
    }, 0)
  }, 0)
};


console.log(containsA());

