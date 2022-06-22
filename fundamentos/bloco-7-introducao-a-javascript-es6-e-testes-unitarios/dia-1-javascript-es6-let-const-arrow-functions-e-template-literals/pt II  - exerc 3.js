const button = document.querySelector('#btn');
const counterBoard = document.querySelector('#counter');
let counter = 0;

counterBoard.innerText = counter;

button.addEventListener('click', function addClickCounter() {
  counter += 1;
  counterBoard.innerText = counter;
})