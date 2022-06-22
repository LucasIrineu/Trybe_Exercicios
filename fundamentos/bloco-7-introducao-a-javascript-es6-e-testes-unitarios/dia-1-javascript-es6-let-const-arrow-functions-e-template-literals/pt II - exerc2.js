const longestWord = (phrase) => {
  const array = phrase.split(' ');
  
  let longestContainer = '';
  for(let index in array){
    if(array[index].length > longestContainer.length){
      longestContainer = array[index];
    }  
  }
  console.log(longestContainer);
}

longestWord('alo alo meu povooo brasileirooooo');