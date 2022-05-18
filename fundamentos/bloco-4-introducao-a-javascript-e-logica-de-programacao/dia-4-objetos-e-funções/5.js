let info1 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };  

for (let index in info1){
    if (info1[index] == 'Sim' && info2[index] == 'Sim'){
        console.log('Ambos recorrentes');
    } else {
    console.log(info1[index] + ' e ' + info2[index])
}
}  