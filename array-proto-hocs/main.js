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

/* я сделал как вы сказали(добавил rest к аргументу sum и добавил spread при вызове sum как колбэк функции - к аргументу fn) и вы, разумеется, наверное, правы, просто мне казалось, когда я про них читал, что rest оператор позволяет потенциальные аргументы сделать как бы массивом, а spread наоборот -переданный массив-аргумент разделить, т.е. учитывая, что возвращаемая функция принимает произвольное кол-во аргументов(через  rest опять же) и мы массив передаем этот в колбэк функцию, добавляя rest к  sum мы вынуждены вызвать ее как колбэк функцию со spread -    т.е. по сути по ходу вызова функций сделать конвертацию аргумента возвр. функции туда обратно, чтобы прийти к тому же результату. Извините, что длинно так) Возможно, что я неправильно что-то понял. Я понимаю, что чтобы не запутаться так дальше будет проще работать с функциями, наверное + требование, что именно сам sum должен принимать произвольное кол-во аргументов и не требовать оптимизации */

let sum = (...ar) => {return ar.reduce((a, b) => a + b, 0)}

function memorize(fn, limit) {
  let results = [];
  
  return function(...arr) {
    if (findResult(results, arr) !== undefined) {
      console.log(`the result is found in memory, sum - ${findResult(results, arr).result} \n`);
      return findResult(results, arr).result;
    } else {
        let newResult = fn(...arr);
        if(results.length >= limit) {
          console.log("memory limit exceeded, removing the   oldest entry to add a new one");
          console.log("calculating sum");
          console.log(`sum - ${newResult} \n`);
          results.shift();
          return results.push({ args: arr, result: newResult})
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