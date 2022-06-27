const userDraw = (userNumber) => { console.log('seu numero é:', userNumber); return userNumber };

const prizeDraw = (userFunction) => {
  const prizeNumber = Math.floor(Math.random() * 5) + 1; 
  console.log('numero premiado:', prizeNumber);
  if( userFunction === prizeNumber) {
    return console.log('Parabéns você ganhou!!');
  }
  return console.log('Tente novamente!');
}

prizeDraw(userDraw(2));