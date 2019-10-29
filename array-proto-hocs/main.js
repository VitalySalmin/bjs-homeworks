let arrayOne = [11, 3]; 
let arrayTwo = [8, 3]; 
let arrayThree = [8, 3];
let arrayFour = [12, 3];


let sortNumber = (a, b) => {
  return a - b;
}

let compareArrays = (aOne, aTwo) => {
  let identical = false; 
  if(JSON.stringify(aOne)==JSON.stringify(aTwo)) {
    identical =true;
    return true;
  } else if(JSON.stringify(aOne.sort(sortNumber)) == JSON.stringify(aTwo.sort(sortNumber))) {
    console.log(`${identical}, разные индексы, хотя и одинаковые значения`)
    return false;
  }
  else if (aOne.length !== aTwo.length ) {
    console.log(`${identical}, разные значения`);
    return false;
  } else {
    return false;
  }  
}

limit = 2;
let results = [];// я пробовал определить массив этот внутри функции  memorize. Если он не в глобальной обл, то вообще не работает. Я пробовал сделать обл видимости для него глобальной, например определеив его через window.results,но получал  ошибки (например когда к нему обр функция compareArrays, пишет, что не может вызвать метод  some   для него т.к. Undefined)
let memorize = (fn, limitation, arrayForFunc) => {
  fn(arrayForFunc, limitation);
  //let results = [];
}

let sum = (arrayToCalculate) => {
  return arrayToCalculate.reduce((a, b) => a + b, 0);  
}

let mainFunction = (arr) => {
  if(results.some(value => compareArrays(value.args, arr)== true)== true){
    console.log("the result is found in the memory")
    console.log(results.filter(value => compareArrays(value.args, arr)== true));
  } else {
    if(results.length >= limit) {
      console.log("memory limit exceeded, removing the oldest entry to add a new one");
      results.shift();
      results.push({ args: arr, result: sum(arr) })
      console.log(sum(arr));
    } else {
      console.log("calculating and adding a new entry to the memory");
      results.push({ args: arr, result: sum(arr) })
      console.log(sum(arr));
    }
  }
}

memorize(mainFunction, 2, arrayOne);
console.log(results);
memorize(mainFunction, 2, arrayTwo);
console.log(results);
memorize(mainFunction, 2, arrayThree);
console.log(results);
memorize(mainFunction, 2, arrayFour);
console.log(results);
