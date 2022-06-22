const fatorialFunction = (number) => {
  const fatorialArray = [];
  // fatorialArray.length = number;
  for(let index = 0; index < number; index += 1){
    fatorialArray.push(index + 1); 
  }
  fatorialArray.reverse();
  let storeProduct = 1;
  for(let index in fatorialArray){
    storeProduct = fatorialArray[index] * storeProduct;
  }
  console.log(storeProduct);
}

fatorialFunction(4);