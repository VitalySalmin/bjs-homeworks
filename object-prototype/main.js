function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = "gr";   
}

const getSound=()=>{return animal.sound;}


function getAnimalSound(animal) {
    if (typeof animal === "Undefined") {
      return null;
    } else {
      return animal.getSound;
    }
}



function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
	let sum = 0;
    for(let mark in marks) {
    let value = marks[mark];
    sum += parseInt (value, 10);
    }
    let average =  sum/marks.length

    let roundedAverage = Math.round(average);
    return roundedAverage;  
 }

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
} 



function checkBirthday(birthday) {
  let regex = /((((19|20)\d\d)\-(0[1-9]|1[0-2])\-(0|1)[0-9]|2[0-9]|3[0-1]))$/;
  let now = Date.now();
  let birthdayDate = new Date(birthday);
  if (regex.test(document.getElementById('birthday').value) === false) {
  	return alert("Вы, вряд ли, ввели свою настоящую дату рождения, либо не ввели ее вовсе")
  }
  let diff = Math.abs(now - birthdayDate);
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4*12));
  if (years >= 18) {
  	return true
  } else {
  	return false
  }    
}




