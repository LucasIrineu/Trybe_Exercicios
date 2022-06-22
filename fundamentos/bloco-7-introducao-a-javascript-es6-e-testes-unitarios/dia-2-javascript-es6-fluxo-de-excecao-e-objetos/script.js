const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const showSkills = (objeto) => {
  const skillsArray = Object.keys(objeto);
  const valuesArray = Object.values(objeto);
  for(let index in skillsArray){
    console.log(`Nome da habilidade: ${skillsArray[index]}
  Nível: ${valuesArray[index]}`);
  }
}
showSkills(student2);