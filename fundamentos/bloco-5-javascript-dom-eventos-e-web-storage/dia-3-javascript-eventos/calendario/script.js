function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let daysUL = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function addDaysOfTheMonth(array){
    for (let index in array){
        decemberDaysLI = document.createElement('li');
        decemberDaysLI.innerHTML = array[index];
        decemberDaysLI.classList.add('day');
        if ((array[index] === 25) || (array[index] === 31)){
            decemberDaysLI.classList.add('holiday');
        }
        if ((array[index] === 4) || (array[index] === 11) || (array[index] === 18) || (array[index] === 25)) {
          decemberDaysLI.classList.add('friday');
        }
        daysUL.appendChild(decemberDaysLI);
      }
  }
addDaysOfTheMonth(dezDaysList);

buttonContainer = document.querySelector('.buttons-container');

function addHolidayButton(buttonName){
  const button = document.createElement('button');
  buttonContainer.appendChild(button);
  button.innerText = buttonName;
  button.id = 'btn-holiday';
}

addHolidayButton('Feriados!');

let holidays = document.querySelectorAll('.holiday');

function highlightHolidays(){
  
  for (let i in holidays){
    if (holidays[i].style.backgroundColor != 'lightgreen') {
      holidays[i].style.backgroundColor = 'lightgreen';
      } 
      else if (holidays[i].style.backgroundColor != '#eee'){
      holidays[i].style.backgroundColor = '#eee';
    }
  } 
}

let buttonHolidays = document.querySelector('#btn-holiday');

buttonHolidays.addEventListener('click', highlightHolidays);

function addFridayButton(buttonName){
  const button = document.createElement('button');
  buttonContainer.appendChild(button);
  button.innerText = buttonName;
  button.id = 'btn-friday';
}


addFridayButton('Sexta-feira');
fridays = document.querySelectorAll('.friday');

let buttonFridays = document.querySelector('#btn-friday');

function highlightFridays(){
  
  for (let i in fridays){
    if (fridays[i].style.color != 'darkgoldenrod') {
      fridays[i].style.color = 'darkgoldenrod';
    } else if (fridays[i].style.color != '#777'){
      fridays[i].style.color = '#777';
    }
  } 
}

buttonFridays.addEventListener('click', highlightFridays);

