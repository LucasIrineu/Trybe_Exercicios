function testaPalindromo(string) {
    let stringTeste = string.split('').reverse().join('');

    if (string === stringTeste){
        return true;
    } else {
        return false;
    }
}


console.log(testaPalindromo('Lanna'));