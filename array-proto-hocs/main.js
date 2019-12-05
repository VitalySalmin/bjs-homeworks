let arrOne = [1, 3]
let arrTwo = [2, 5]
let arrThree = [3, 7]
let arrFour = [4, 6]

let compareArrays = (aOne, aTwo) => {
  return aOne.length === aTwo.length && aOne.every((value, index) => value === aTwo[index])
}

let findResult = (arrayToSearch, arrayToCompareWith) => {
  return arrayToSearch.find(result => compareArrays(result.args, arrayToCompareWith));
}

let sum = (...ar) => {return ar.reduce((a, b) => a + b, 0)}

function memorize(fn, limit) {
  let results = [];
  
  return function(...arr) {
    if (findResult(results, arr) !== undefined) {
      let resultToDisplay = findResult(results, arr).result;
      console.log(`the result is found in memory, sum - ${resultToDisplay} \n`);
      return resultToDisplay;
    } else {
        let newResult = fn(...arr);
        if(results.length >= limit) {
          console.log("memory limit exceeded, removing the   oldest entry to add a new one");
          console.log("calculating sum");
          console.log(`sum - ${newResult} \n`);
          results.shift();
          results.push({ args: arr, result: newResult});
          return newResult;
        } else { 
          console.log("calculating and adding a new entry to the memory");
          console.log(`sum - ${newResult} \n`);
          results.push({ args: arr, result: newResult});
          return newResult;
      }
    }
  }
}

let mSum = memorize(sum, 2);
mSum(1, 3);
mSum(1, 3);
mSum(2, 5);
mSum(3, 7);
mSum(2, 5);
mSum(4, 6);
mSum(1, 3);








