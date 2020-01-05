// Numbers to letters

function switcher(x){
    
  const objectWords = {
    1:'z', 2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',
    8:'s',9:'r',10:'q', 11:'p',12:'o',13:'n',
    14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g', 
    21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',
    28:'?',29:' '}
  
  const newArray = x.map(function(y) {
    return objectWords[y * 1]; 
  });
  
  return newArray.join('');
  }
  
  switcher(['24', '12', '23', '22', '4', '26', '9', '8']);

  // Remove First and Last Character 

  function removeChar(str) {
    let firstLetter = str.substr(1);
    let finalResult = firstLetter.slice(0,-1);
    return finalResult;
  }
  
  remove("eloquent");


  // Vowel Count 

  function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++){
      if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
        vowelsCount += 1;
      }
    }   
    return vowelsCount;
  }
  
  getCount("abracadabra");

  

