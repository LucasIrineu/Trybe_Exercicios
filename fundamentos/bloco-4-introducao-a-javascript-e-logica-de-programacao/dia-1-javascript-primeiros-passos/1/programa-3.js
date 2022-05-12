const a = 20 , b = 10, c=45;

if (a>b && a>c){
    console.log(a);
} else if (b>a && b>c){
    console.log(b);
} else if (c>a && c>b){
    console.log(c);
} else {
    console.log("erro, 1 ou mais numeros possuem o mesmo valor");
}
