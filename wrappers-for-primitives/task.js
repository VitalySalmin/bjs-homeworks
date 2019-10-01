/*1е задание - не совсем уверен в формуле. при расчете общей суммы кредита при выборе средней длины месяца 30, расчет для долгосрочного кредита был неточным, я пытался посчитать среднюю длину мес. впринцие, но округлил (возможно для большого кол-ва мес. в расчете будут ошибки, но с учетом того что больше чем на 30 лет не кредитуют, вроде не должно:))
2ю Возможно тип данных во второй задаче можно и убрать, раз по тз мы проверяем пуста ли строка (т.е. состоит ли она из ничего или одних пробелов, если я правильно понял), но также не уверен тут.
*/
// TASK 1
"use strict";
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;
    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

  if (typeof amount === 'string') {
    amount = parseInt(amount);
  }
  if (typeof contribution === 'string') {
    contribution = parseInt(contribution);
  }
  
function calculateTotalMortgage(percentage, firstPayment, sum, endDate) {
  let date1 = new Date();
  let date2 = new Date(endDate);
  let diffTime = Math.abs(date2 - date1);
  let months = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.4)); 
  if (typeof months === 'string') {
    months = parseInt(months);
  }
  percentage = percentage/1200;
  let monthlyPayment = sum*((percentage + percentage/((Math.pow((1+percentage), months)-1))));
  let totalPayment = monthlyPayment * months + contribution;
  if (typeof totalPayment === 'string') {
  	totalPayment = parseFloat(totalPayment);
  }
  return totalPayment.toFixed(2);
}


// TASK 2

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if ((typeof name !== 'string' && typeof name !== 'number') || !name.replace(/\s/g, '').length) {
    	name = "Аноним";
    }
    console.log(name.length);
    console.log(typeof name);
    let greeting = `Привет мир! Меня зовут ${name}`;
    return greeting;
}
