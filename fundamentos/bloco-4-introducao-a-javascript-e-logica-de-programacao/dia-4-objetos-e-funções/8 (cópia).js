let techArray = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
let nameString = 'Lucas';
  let objectToReturn = [];
   
  for (let index in techArray){
    objectToReturn[index] = {
     tech: techArray[index],
     name: nameString, 
    };
  }
  console.log(objectToReturn);  
   