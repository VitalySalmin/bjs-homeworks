let wakeUpTime = "7:35";
let goToBedTime = "22:35";

let setDailyRhythm = (wakeUpTime, bedTime) => {
setInterval(checkTimeEvening, 1000);
setInterval(checkTimeMorning, 1000);
}

/* по тз - "Каждую секунду setDailyRhythm делает следущее:
Получает текущее время в формате hh:mm
Передаёт текущее время в каждую функцию-будильник." - но у функции. бульника два параметра только - время (подема или ложиться когда) и функция алерта */

let setAlarm = (time, callback) => {
  return function checkTimeNRing () {
  let currentDate = new Date();
  let hrs = currentDate.getHours();
  let min = currentDate.getMinutes();
  let currentTime= hrs + ":" + min;
  //console.log(typeof(currentTime));
  //console.log("currentTime " + currentTime);
  if (time == currentTime) {
    return callback();
  }
  }
}

const goodMorning = () => alert('Доброе утро!');
const goToBed = () => alert('Пора спать!')

checkTimeMorning = setAlarm('7:53', goodMorning);
checkTimeEvening = setAlarm('21:56', goToBed);


setDailyRhythm(wakeUpTime, goToBedTime);