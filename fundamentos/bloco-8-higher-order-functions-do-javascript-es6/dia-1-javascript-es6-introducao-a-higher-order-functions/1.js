const nameAndEmail = (nome) => {
  let nomeUnder = nome.split(' ').join('_');
  const obj = {name: nome, email: `${nomeUnder}@trybe.com`}
  return obj
}

const newEmployees = () => {
  const employees = {
    id1: nameAndEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nameAndEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nameAndEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());