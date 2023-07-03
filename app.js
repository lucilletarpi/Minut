const startTimer = document.querySelector(".start").addEventListener("click", startTime);
const StopTimer =document.querySelector(".stop").addEventListener("click", stopTime);
const ResetTimer =document.querySelector(".reset").addEventListener("click", resetTime);
const timerBtn = document.querySelector("#timer");
console.log(startTimer);

let timerInterval;
let timer = 0;

function startTime(){
console.log('start');
if (!timerInterval) {
    timerInterval = setInterval(incrementTimer, 1000);
  }
};

function stopTime(){
    console.log('Stop');
    clearInterval(timerInterval);
    timerInterval = null;
    const stop  = document.createElement("p");
    stop.innerHTML = "Stop Time";
    stop.className = "warningStop";
    console.log(stop);
    timerBtn.appendChild(stop);
    
};

function resetTime(){
    console.log('Reset');
    stopTime();
    timer = 0;
    updateTimerDisplay();
};

function incrementTimer() {
    timer++;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    timerBtn.textContent = formattedTime;
  }

  function padZero(value) {
    return value.toString().padStart(2, "0");
  }