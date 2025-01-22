const button = document.getElementById("5SecondTimer");
const timer = document.getElementById("stopwatch");
let buttonclick = true;
let interval;

button.addEventListener("click", function () {
  const notification = document.createElement("p");
  notification.innerText = "You have clicked this button!";
  document.body.appendChild(notification);
  setTimeout(function () {
    document.body.removeChild(notification);
  }, 5000);
});

timer.addEventListener("click", function () {
  if (buttonclick === true) {
    const timerDisplay = document.createElement("p");
    let timeSeconds = 1;
    let timeMinutes = 0;
    interval = setInterval(() => {
      if (timeSeconds < 10) {
        timerDisplay.innerText = `${timeMinutes}:0${timeSeconds} seconds has passed`;
      } else
        timerDisplay.innerText = `${timeMinutes}:${timeSeconds} seconds has passed`;
      if (timeSeconds == 60) {
        timeMinutes++;
        timeSeconds = 0;
      }
      document.body.appendChild(timerDisplay);
      timeSeconds++;
    }, 1000);
    buttonclick = false;
  } else {
    clearInterval(interval);
    buttonclick = true;
  }
});
