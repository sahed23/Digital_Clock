let i = 1; // for initial call
function digitalClock() {
  // references
  let hoursDiv = document.querySelector(".clockBody .hours");
  let minutesDiv = document.querySelector(".clockBody .minutes");
  let secondsDiv = document.querySelector(".clockBody .seconds");


  let Time = new Date();
  let mainHour = Time.getHours();
  let hours = mainHour % 12 == 0 ? 12: mainHour % 12;
  let minutes = Time.getMinutes();
  let seconds = Time.getSeconds();

  secondsDiv.innerHTML = seconds;
  if (seconds <= 9) {
    secondsDiv.innerHTML = ` 0${seconds} `;
  }
  if (seconds == 0) {
    minutesDiv.innerHTML = minutes;
    if (minutes <= 9) {

      minutesDiv.innerHTML = ` 0${minutes} `;
    }
  }
  if (seconds == 0 && minutes == 0) {
    hoursDiv.innerHTML = hours;
    if (hours <= 9) {
      hoursDiv.innerHTML = ` 0${hours} `;
    }
  }




  if (i == 1) {
    minutesDiv.innerHTML = minutes;
    hoursDiv.innerHTML = hours;
    if (minutes <= 9) {
      minutesDiv.innerHTML = ` 0${minutes} `;
    }
    if (hours <= 9) {
      hoursDiv.innerHTML = ` 0${hours} `;
    }
    i = 2;
  } // for initial call call

};
digitalClock();
setInterval(digitalClock, 1000);