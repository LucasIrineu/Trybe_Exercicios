const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkTest = (arrayGabarito, arrayRespostas) => {
  const rightAnswers = 0;
  const wrongAnswers = 0;
  const points = 0;
  for (let index in arrayGabarito) {
    if (arrayGabarito[index] === arrayRespostas[index]) {
      rightAnswers +=1;
      points += 1,5
    } else if (arrayRespostas[index] === 'N.A') {
      points = points;
    }
    wrongAnswers +=1;
    points -= 0,5; 
  }

  return 'numero de acertos:', rightAnswers, '\nnumero de erros:', wrongAnswers, '\npontuação:', points;
}

const HOFCheckTest = (arrayGabarito, arrayRespostas, funcc) => { 
  return funcc()}

console.log(HOFCheckTest(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTest()));


