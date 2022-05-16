let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSoma = 0;

for (let index = 0; index < numbers.length; index+= 1){
    resultadoSoma = resultadoSoma + numbers[index];
}

if ((resultadoSoma/(numbers.length - 1)) > 20){
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
}