// TASK 1

function getSolution(a, b, c) {
  let d = Math.pow(b, 2) - 4*a*c;
  let x1;
  let x2;
  if (d < 0) {
  	return({D: d});
  } else if (d == 0) {
  	 x1 =  -(b / (2*a));
  	 solutions = {
      roots: x1, 
      D: d 
     }
    return(solutions); 
  } else {
  	x1 =  (-b) + Math.sqrt(d) / 2 * a;
  	x2 =  (-b) + Math.sqrt(d) / 2 * a;
  	solutions = {
      roots: [x1, x2],
      D: d 
     }
    return(solutions);
  }
}

abc = {a: prompt("Введите значение  'a' по формуле  ax^2+bx-c=0"), b: prompt("Введите значение  'b' по формуле  ax^2+bx-c=0"), c: prompt("Введите значение  'c' по формуле  ax^2+bx-c=0")};
function showSolutionsMessage( a, b, c ) {
  result = getSolution(abc.a, abc.b, abc.c);
  console.log(`Значение дискриминанта: ${result.D}`); 
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(abc.a, abc.b, abc.c);


 // TASK 2

console.log("");
console.log("");

let subjectPlusMark = new Object();

let data = {
  algebra:[4, 5, 3, 3, 3, 2], 
  geometry:[5, 3, 3, 4, 4], 
  physics : [2, 2, 3, 2, 4]
};

function getAverageScore() {
  let averageForAll = [];
  for(let prop in data){
    let sum = 0;
    let value = data[prop];
    for(let i = 0;  i < value.length; i++) {
    sum += parseInt ( value[i], 10);  
    }

    function getAverage(){
    return  sum/value.length
    }
    let avg = getAverage();
    subjectPlusMark[prop] = avg;   
  } 
    for(let key in subjectPlusMark){
      let val = subjectPlusMark[key];
      averageForAll.push(val);
    }
    let total = 0;
    for(let i = 0;  i < averageForAll.length; i++) {
      total += averageForAll[i];
    }
    let totalAvg = total/averageForAll.length;
    subjectPlusMark.average = totalAvg;
    console.log(subjectPlusMark);    
}
 
getAverageScore(); 


//TASK 3

console.log("");
console.log("");

let cypher = {
  aaa: 0,
  bbb: 0
}

let plainText = new Object();

function getPersonData(secretData) {
  for(let property in secretData){
    if (property === "aaa" && secretData[property] === 1) {
      plainText.firstName = "Эмильо";
    } else if (property === "bbb" && secretData[property] === 1) {
      plainText.lastName = "Эмильо";
    } else if (property === "bbb" && secretData[property] === 0) {
      plainText.lastName = "Родриго";
    } else if (property === "aaa" && secretData[property] === 0) {
      plainText.firstName = "Родриго";
    } else {
      plainText.unknown = "unknown";
      console.error("Не могу расшифровать,т.к. символы во входном объекте не предствлены в таблице кодировки.")
    }
  }
  console.log("\x1b[36m", "Вот, что мне удалось расшифровать:", plainText);
} 

getPersonData(cypher);
