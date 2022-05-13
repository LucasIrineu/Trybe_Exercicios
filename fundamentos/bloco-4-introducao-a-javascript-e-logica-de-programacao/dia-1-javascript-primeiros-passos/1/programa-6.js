let peca = "RaiNHa";

peca = peca.toLowerCase();

switch (peca){
    case "torre":
        console.log(peca + " se move em linha reta");
        break;

    case "cavalo":
        console.log(peca + "- se move em forma de 'L'");
        break;

    case "bispo":
        console.log(peca + "- se move na diagonal");
        break;
    case "rei":
        console.log(peca + "- se move uma casa em qualquer direção");
        break;
    case "rainha":
        console.log(peca + "- se move em todas as direções");
        break;
    case "peão":
        console.log(peca + "- se move frontalmente e ataca outras peças na diagonal");
        break;
    default:
        console.log("peça invalida");    
}


