# KatasDelivery

## 1. Numbers to Letters

```javascript
function switcher(x){
  const objectWords = {1:'z',2:'y',3:'x',4:'w',5:'v',6:'u',7:'t',8:'s',9:'r',10:'q',
11:'p',12:'o',13:'n',14:'m',15:'l',16:'k',17:'j',18:'i',19:'h',20:'g',
21:'f',22:'e',23:'d',24:'c',25:'b',26:'a',27:'!',28:'?',29:' '}

const toArray = x.map(function (y) {
  return objectWords[y * 1]; 
});

return toArray.join('');
}

switcher(['24', '12', '23', '22', '4', '26', '9', '8']);
```

## 2. Remove First and Last Character

```javascript
  function removeChar(str) {
    let firstLetter = str.substr(1);
    let finalResult = firstLetter.slice(0,-1);
    return finalResult;
  }
  
  remove("eloquent");
```

## 3. Vowel Count 

```javascript
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
```

## 4. Sum Mixed Array

```javascript
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
```

## 5. Count of positives / sum of negatives

```javascript
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
```

## 6. Get the mean of an array

```javascript
function getAverage(marks){
  let sumMarks = 0;
  for (let i = 0; i < marks.length; i++){
    sumMarks += marks[i]; 
  }
  let numberMarks = marks.length;
  let averageMarks = sumMarks / numberMarks;
  averageMarks = Math.floor(averageMarks);
  return averageMarks;
}

getAverage([2,2,2,2]);
```

## 7. Find numbers which are divisible by given number

```javascript
function divisibleBy(numbers, divisor){
  let numberDivisible = [];
  
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % divisor === 0) {
      numberDivisible.push(numbers[i]);
    }
  }
return numberDivisible
}

divisibleBy([1, 2, 3, 4, 5, 6], 2);
```

## 8. List Filtering

```javascript
function filter_list(l) {
  let number = [];

  for (let i = 0; i < l.length; i++){
    if (typeof l[i] === "number"){
      number.push(l[i]);
    }
  }
  return number;
}

filter_list([1,2,'a','b']);
```

## 9. Credit Card Mask 

```javascript
function maskify(cc) {
  let maskifyResult = "";
  for (i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      maskifyResult += '#';
    } else {
      maskifyResult += cc[i];
    }
  }
  return maskifyResult;
}

maskify("4556364607935616");
```

## 10. Flatten

```javascript
var flatten = function(array){
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])){
      flattened = flattened.concat(flatten(array[i]));
    } else {
      flattened.push(array[i]);
    }
  }
  return flattened
}

flatten([1,2,3]);
```
## 11. Square Every Digit 

```javascript
function squareDigits(num){
  let numToString = num.toString();
  let stringResult = "";
  for (i = 0; i < numToString.length; i++) {
    stringResult += numToString[i] ** 2;
  }
  return parseInt(stringResult, 10);
}

squareDigits(9119);
```







