// 1. Numbers to letters

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

  // 2. Remove First and Last Character 

  function removeChar(str) {
    let firstLetter = str.substr(1);
    let finalResult = firstLetter.slice(0,-1);
    return finalResult;
  }
  
  remove("eloquent");


  // 3. Vowel Count 

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


// 4. Sum Mixed Array

  function sumMix(x){
    let newArr = [];
    for (let i = 0; i < x.length; i++) { 
      newArr.push(parseInt(x[i], 10));
    }
    let result = 0;
    for (let k = 0; k <newArr.length; k++){
      result += newArr[k];
    }
    return result;
  }

 // 5. Count of positives / sum of negatives

 function countPositivesSumNegatives (input){
  let positiveNum = [];
  let negativeNum = [];
  let empty = []

  if (input === null || input.length < 1){
    return empty;
  }

  for (let i = 0; i < input.length; i++){
    if (input[i] > 0) {
      positiveNum.push(input[i]);
    } else {
      negativeNum.push(input[i]);
    }
  }
  let countPositives = positiveNum.length;
  let sumNegatives = 0;
  for (let k = 0; k < negativeNum.length; k++){
    sumNegatives = sumNegatives + negativeNum[k];
  }

  let finalResult = [];
  finalResult.push (countPositives, sumNegatives);
  return finalResult;
}

countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

// 6. Get the mean of an array

function getAverage(marks){
  let sumMarks = 0;
  for (let i = 0; i < marks.length; i++){
    sumMarks += marks[i]; 
  }
  let numberMarks = marks.length;
  let averageMarks = sumMarks / numberMarks;
  return averageMarks;
}

getAverage([2,2,2,2])




 

