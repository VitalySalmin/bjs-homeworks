let wakeUpTime = "14:48";
let goToBedTime = "14:49";

let setAlarm = (time, callback) => {
  return function checkTimeNRing () {
    let dateToday = new Date();
    let dateString = dateToday.toTimeString();
    dateString = dateString.split(' ')[0];
    let currentTime = (dateString.replace(/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/g, '')).substring(0, 5);
    //console.log(dateString);
    //console.log(goToBedValue)
    //console.log(goodMorningValue);
    if (time == currentTime ) {
      return callback();
    }
  }
}
//const goodMorning = () => alert("morning");
  
let goodMorning = () => {
  goodMorningValue = confirm( 'Доброе утро! Нажмите Cancel(отмена), чтобы остановить работу будильника');
}
//const goToBed = () => alert("bedTime")
let goToBed = () => {
  goToBedValue = confirm('Пора спать! Нажмите Cancel(отмена), чтобы остановить работу будильника');
}


let goToBedValue  = true;
let goodMorningValue = true;

checkTimeMorning = setAlarm(wakeUpTime, goodMorning);
checkTimeEvening = setAlarm(goToBedTime, goToBed);

let setDailyRhythm = (wakeUpTime, bedTime) => {
  let morningInterv = setInterval(() => {
    checkTimeMorning();
    if (goodMorningValue !== true) {
      clearInterval(morningInterv);}
    }, 1000); 
  let eveningInterv= setInterval(() => {
    checkTimeEvening();
    if (goToBedValue !== true) {
      clearInterval(eveningInterv);
    }
  }, 1000);
}
 
setDailyRhythm(wakeUpTime, goToBedTime);

