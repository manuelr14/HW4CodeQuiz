var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var tittleEl = document.querySelector(".tittle");
var ScoreResultEl = document.querySelector(".ScoreResult");

var secondsLeft = 5;

function principal(){

    tittleEl.textContent = "Coding Quiz Challenge!";
    mainEl.textContent = "Try to answer the following code-related questions withing the time limit. Keep in mind that incorret answer will penalize your score time by 10 seconds";

}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent ="time:" + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timeOut();
    }

  }, 1000);
}

function timeOut() {
  mainEl.remove();  
  timeEl.textContent = "time:0" ;
  tittleEl.textContent = "All Done!";
  ScoreResultEl.textContent = "Your Score is:0"; 

  

}
principal();
setTime();