let wakeUpTime = "14:48";
let goToBedTime = "14:49";


/* "если текущее время в часах или минутах будет меньше 10 <...> (например 05:06 - пять утра, шесть минут) то ваши функции getHours() и getMinutes() вернут не 05 и 06, а 5 и 6 соответственно в time запишется строка 5:6" - я это заметил:) и в этот раз постарался поправить, 
просто я хотел оставить минмальное кол-во операций и самых простых при том. 
Если для  сравнения писать без 0-ков, функция работала  (время тогда выглядит в непривычном для нас формате правда...) */

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
/*то, что ниже я сделал, чтобы была возможность остановить будильник, я подумал, вам так может быть удобнее и при проверке.
Алерт я протестировал перед этим - работал нормлаьно*/
  
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

