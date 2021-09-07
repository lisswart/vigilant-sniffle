var timer = document.getElementById("timer");
timer.style = "padding-top: 1rem; font-size: 2em; text-align: center";
var box = document.getElementById("timer-box");
var stop = document.getElementById("stop");
var counter = 0;
var duration = 0;
let timerID;

var form = document.getElementById("form");
var minutes = document.getElementById("duration");
var toggl = submit.classList;

timer.innerText = convertSeconds(duration);
box.appendChild(timer);
var start = true;

var enter = document.getElementById("submit");
submit.addEventListener("click", event => {
  event.preventDefault();
  duration = minutes.value * 60 + 1;
  // start = toggl.toggle(true);

  if (start) {
    timerID = setInterval(timeIt, 1000);
  minutes.value = "";
  }  
});

function timeIt() {
  counter++;  
  timer.innerText = convertSeconds(duration - counter);

  if (counter === duration) {
    clearInterval(timerID);
    counter = 0;
  }
}

stop.addEventListener("click", event => {
  event.preventDefault();
  clearInterval(timerID);
});

function convertSeconds(s) {
  let min = Math.floor(s / 60);
  let sec = s % 60;
  if ( min > 60) {
    let hour = Math.floor(min / 60);
    min = min % 60;
    return `${hour}h:${min}m:${sec}s`;
  } else {
    return `${min}m:${sec}s`;
  }
}