var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");


var secondsLeft = 50;

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
  timeEl.textContent = "time:0" ;

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();