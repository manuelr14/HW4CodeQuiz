var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");

var tittleEl = document.querySelector(".tittle");
var ScoreResultEl = document.querySelector(".ScoreResult");
var buttonPlaceEL = document.querySelector("#buttonplace");
var secondsLeft = 1055;

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
buttonPlaceEL.remove();
setTime();
mainEl.textContent= " "; 
tittleEl.textContent = " ";
var li = document.createElement("li");

tittleEl.innerHTML = myquestions[0]["question"];
// for (i = 0; i < 4; i++) {
var buttona = document.createElement("button");
buttona.textContent= myquestions[0]["answers"][0];
var check0 = myquestions[0]["answers"][0];
optionA.appendChild(buttona);
buttona.addEventListener("click",function(event){



if ( check0 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
}
else{

    mainEl.textContent=" incorrect answer";
}
});


var buttonb = document.createElement("button");
buttonb.textContent= myquestions[0]["answers"][1];
var check1= myquestions[0]["answers"][1];
optionB.appendChild(buttonb);
buttonb.addEventListener("click",function(event){



if ( check1 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
}
else{

    mainEl.textContent=" incorrect answer";
}
});

var buttonc = document.createElement("button");
buttonc.textContent= myquestions[0]["answers"][2];
var check2 = myquestions[0]["answers"][2];
optionC.appendChild(buttonc);
buttonc.addEventListener("click",function(event){


if ( check2 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
}
else{

    mainEl.textContent=" incorrect answer";
}
});

var buttond = document.createElement("button");
buttond.textContent= myquestions[0]["answers"][3];
var check3 = myquestions[0]["answers"][3];
optionD.appendChild(buttond);
buttond.addEventListener("click",function(event){


if ( check3 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
}
else{

    mainEl.textContent=" incorrect answer";
}
});









}


function verification(){

if (event=== myquestions[0]["correctanswer"]){
    mainEl.textContent= "correct answer";
}
else{

    // mainEl.textContent=" incorrect answer";
}
}


function timeOut() {
  mainEl.textContent= " ";  
  buttonPlaceEL.remove();
  timeEl.textContent = "time:0" ;
  tittleEl.textContent = "All Done!";
  ScoreResultEl.textContent = "Your Score is:0"; 

  

}

principal();
// setTime();