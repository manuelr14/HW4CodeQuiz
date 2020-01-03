var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var tittleEl = document.querySelector(".tittle");
var ScoreResultEl = document.querySelector(".ScoreResult");
var buttonPlaceEL = document.querySelector("#buttonplace");
var secondsLeft = 5;

function principal(){

    tittleEl.textContent = "Coding Quiz Challenge!";
    mainEl.textContent = "Try to answer the following code-related questions withing the time limit. Keep in mind that incorret answer will penalize your score time by 10 seconds";
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Start Quiz";
    buttonPlaceEL.appendChild(btn);
    buttonPlaceEL.addEventListener("click", steptwo);

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

function steptwo(){
setTime();


}


function timeOut() {
  mainEl.remove();  
  buttonPlaceEL.remove();
  timeEl.textContent = "time:0" ;
  tittleEl.textContent = "All Done!";
  ScoreResultEl.textContent = "Your Score is:0"; 

  

}
principal();
// setTime();