// kata 1:
function switcher(x) {
  let res = "";
  let letsA = 26;
  let asciiNum = 97;

  for (let i = 0; i < x.length; i++) {
    if (x[i] <= letsA) {
      res += String.fromCharCode(asciiNum + letsA - parseInt(x[i]));
    } else {
      switch (x[i]) {
        case "27":
          res += String.fromCharCode(33);
          break;
        case "28":
          res += String.fromCharCode(63);
          break;
        case "29":
          res += String.fromCharCode(32);
          break;
      }
    }
  }
  return res;
}
// ! -> 33
// ? -> 63
// ' ' -> 32

// kata 2:  Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
}

// kata 3: Vowel Count
function getCount(str) {
  let vowelsCount = 0;

  // enter your majic here
  for (let i = 0; i < str.split("").length; i++) {
    // console.log(str.split("")[i])
    switch (str.split("")[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}

// kata 4: Sum Mixed Array
function sumMix(x) {
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] == "number") {
      sum += x[i];
    } else {
      sum += parseInt(x[i]);
    }
  }
  return sum;
}

// kata 5: Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let res = [];
  let count = 0;
  let sum = 0;

  if (input != null && input != 0) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        sum -= input[i];
      } else if (input[i] > 0) {
        count++;
      }
    }

    res.push(count);
    res.push(sum * -1);
  }

  return res;
}

// kata 6: Get the mean of an array
function getAverage(marks) {
  let res = 0;
  for (let i = 0; i < marks.length; i++) {
    res += marks[i] / marks.length;
  }
  return parseInt(Math.floor(res));
}

// kata 7: Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
  let res = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      res.push(numbers[i]);
    }
  }
  return res;
}

// kata 8: List Filtering
function filter_list(l) {
  // Return a new array with the strings filtered out
  let listStr = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      listStr.push(l[i]);
    }
  }

  return listStr;
}

// kata 9: Credit Card Mask
function maskify(cc) {
  let newMaskify = "";

  if (cc.length > 4) {
    for (let i = 0; i < cc.length; i++) {
      if (i < cc.length - 4) {
        newMaskify += "#";
      } else {
        newMaskify += cc[i];
      }
    }
  } else {
    newMaskify += cc;
  }

  return newMaskify;
}

// Medium 1: Flatten
var flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[0][0] != "undefined") {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

// Medium 2: Square Every Digit
function squareDigits(num) {
  //may the code be with you
  let powNum = [];
  let strNum = num.toString();

  for (let i = 0; i < strNum.length; i++) {
    powNum.push(Math.pow(parseInt(strNum[i]), 2));
  }
  return parseInt(powNum.join(""));
}
