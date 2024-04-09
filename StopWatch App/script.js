let timer; // Variable to store the setInterval instance
let isRunning = false; // Flag to check if the stopwatch is running
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer); // Stop the timer
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    timer = setInterval(updateTime, 1000); // Start the timer
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
  isRunning = !isRunning; // Toggle the running state
}

function reset() {
  clearInterval(timer); // Stop the timer
  document.getElementById('startStopBtn').textContent = 'Start';
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateTime();
}

function updateTime() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  const display = document.getElementById('display');
  display.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

document.getElementById('startStopBtn').addEventListener('click', startStop);
document.getElementById('resetBtn').addEventListener('click', reset);
