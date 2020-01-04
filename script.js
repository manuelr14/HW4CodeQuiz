var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var yournameinput = document.getElementById("yourname");
var placeholdername= document.getElementById("placeholder");
var tittleEl = document.querySelector(".tittle");
var ScoreResultEl = document.querySelector(".ScoreResult");
var buttonPlaceEL = document.querySelector("#buttonplace");
var secondsLeft = 50;
var score=0;

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

    if(secondsLeft < 0) {
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
question1();
}

function question1(){
tittleEl.innerHTML = myquestions[0]["question"];

var buttona = document.createElement("button");
buttona.textContent= myquestions[0]["answers"][0];
var check0 = myquestions[0]["answers"][0];
optionA.appendChild(buttona);
buttona.addEventListener("click",function(event){



if ( check0 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
    question2();
    score++
}
else{

    mainEl.textContent=" incorrect answer";
    question2();
    score--;
    secondsLeft= secondsLeft- 15;
}
});


var buttonb = document.createElement("button");
buttonb.textContent= myquestions[0]["answers"][1];
var check1= myquestions[0]["answers"][1];
optionB.appendChild(buttonb);
buttonb.addEventListener("click",function(event){



if ( check1 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
    question2();
    score++
}
else{

    mainEl.textContent=" incorrect answer";
    question2();
    score--;
    secondsLeft= secondsLeft- 15;
}
});

var buttonc = document.createElement("button");
buttonc.textContent= myquestions[0]["answers"][2];
var check2 = myquestions[0]["answers"][2];
optionC.appendChild(buttonc);
buttonc.addEventListener("click",function(event){


if ( check2 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
    question2();
    score++
}
else{

    mainEl.textContent=" incorrect answer";
    question2();
    score--;
    secondsLeft= secondsLeft- 15;
}
});

var buttond = document.createElement("button");
buttond.textContent= myquestions[0]["answers"][3];
var check3 = myquestions[0]["answers"][3];
optionD.appendChild(buttond);
buttond.addEventListener("click",function(event){


if ( check3 == myquestions[0]["correctanswer"] ){
    mainEl.textContent= "correct answer";
    question2();
    score++
}
else{

    mainEl.textContent=" incorrect answer";
    question2();
    score--;
    secondsLeft= secondsLeft- 15;
}
});
}

function question2(){
    optionA.removeChild(optionA.childNodes[0]);
    optionB.removeChild(optionB.childNodes[0]);
    optionC.removeChild(optionC.childNodes[0]);
    optionD.removeChild(optionD.childNodes[0]);
    
    

        tittleEl.innerHTML = myquestions[1]["question"];
       
        var buttona = document.createElement("button");
        buttona.textContent= myquestions[1]["answers"][0];
        var check0 = myquestions[1]["answers"][0];
        optionA.appendChild(buttona);
        buttona.addEventListener("click",function(event){
        
        
        
        if ( check0 == myquestions[1]["correctanswer"] ){
            mainEl.textContent= "correct answer";
            question3();
            score++
        }
        else{
        
            mainEl.textContent=" incorrect answer";
            question3();
            score--;
            secondsLeft= secondsLeft- 15;
        }
        });
        
        
        var buttonb = document.createElement("button");
        buttonb.textContent= myquestions[1]["answers"][1];
        var check1= myquestions[1]["answers"][1];
        optionB.appendChild(buttonb);
        buttonb.addEventListener("click",function(event){
        
        
        
        if ( check1 == myquestions[1]["correctanswer"] ){
            mainEl.textContent= "correct answer";
            question3();
            score++
        }
        
        else{
        
            mainEl.textContent=" incorrect answer";
            question3();
            score--;
            secondsLeft= secondsLeft- 15;
        }
        });
        
        var buttonc = document.createElement("button");
        buttonc.textContent= myquestions[1]["answers"][2];
        var check2 = myquestions[1]["answers"][2];
        optionC.appendChild(buttonc);
        buttonc.addEventListener("click",function(event){
        
        
        if ( check2 == myquestions[1]["correctanswer"] ){
            mainEl.textContent= "correct answer";
            question3();
            score++
        }
        
        else{
        
            mainEl.textContent=" incorrect answer";
            question3();
            score--;
            secondsLeft= secondsLeft- 15;
        }
        });
        
        var buttond = document.createElement("button");
        buttond.textContent= myquestions[1]["answers"][3];
        var check3 = myquestions[1]["answers"][3];
        optionD.appendChild(buttond);
        buttond.addEventListener("click",function(event){
        
        
        if ( check3 == myquestions[1]["correctanswer"] ){
            mainEl.textContent= "correct answer";
            question3();
            score++
        }
        
        else{
        
            mainEl.textContent=" incorrect answer";
            question3();
            score--;
            secondsLeft= secondsLeft- 15;
        }
        });
        }

        function question3(){
            optionA.removeChild(optionA.childNodes[0]);
            optionB.removeChild(optionB.childNodes[0]);
            optionC.removeChild(optionC.childNodes[0]);
            optionD.removeChild(optionD.childNodes[0]);
            
            
        
                tittleEl.innerHTML = myquestions[2]["question"];
               
                var buttona = document.createElement("button");
                buttona.textContent= myquestions[2]["answers"][0];
                var check0 = myquestions[2]["answers"][0];
                optionA.appendChild(buttona);
                buttona.addEventListener("click",function(event){
                
                
                
                if ( check0 == myquestions[2]["correctanswer"] ){
                    mainEl.textContent= "correct answer";
                    question4();
                    score++
                }
                else{
                
                    mainEl.textContent=" incorrect answer";
                    question4();
                    score--;
                    secondsLeft= secondsLeft- 15;
                }
                });
                
                
                var buttonb = document.createElement("button");
                buttonb.textContent= myquestions[2]["answers"][1];
                var check1= myquestions[2]["answers"][1];
                optionB.appendChild(buttonb);
                buttonb.addEventListener("click",function(event){
                
                
                
                if ( check1 == myquestions[2]["correctanswer"] ){
                    mainEl.textContent= "correct answer";
                    question4();
                    score++
                }
                
                else{
                
                    mainEl.textContent=" incorrect answer";
                    question4();
                    score--;
                    secondsLeft= secondsLeft- 15;
                }
                });
                
                var buttonc = document.createElement("button");
                buttonc.textContent= myquestions[2]["answers"][2];
                var check2 = myquestions[2]["answers"][2];
                optionC.appendChild(buttonc);
                buttonc.addEventListener("click",function(event){
                
                
                if ( check2 == myquestions[2]["correctanswer"] ){
                    mainEl.textContent= "correct answer";
                    question4();
                    score++
                }
                
                else{
                
                    mainEl.textContent=" incorrect answer";
                    question4();
                    score--;
                    secondsLeft= secondsLeft- 15;
                }
                });
                
                var buttond = document.createElement("button");
                buttond.textContent= myquestions[2]["answers"][3];
                var check3 = myquestions[2]["answers"][3];
                optionD.appendChild(buttond);
                buttond.addEventListener("click",function(event){
                
                
                if ( check3 == myquestions[2]["correctanswer"] ){
                    mainEl.textContent= "correct answer";
                    question4();
                    score++
                }
                
                else{
                
                    mainEl.textContent=" incorrect answer";
                    question4();
                    score--;
                    secondsLeft= secondsLeft- 15;
                }
                });
                }
        function question4(){
                    optionA.removeChild(optionA.childNodes[0]);
                    optionB.removeChild(optionB.childNodes[0]);
                    optionC.removeChild(optionC.childNodes[0]);
                    optionD.removeChild(optionD.childNodes[0]);
                    
                    
                
                        tittleEl.innerHTML = myquestions[3]["question"];
                       
                        var buttona = document.createElement("button");
                        buttona.textContent= myquestions[3]["answers"][0];
                        var check0 = myquestions[3]["answers"][0];
                        optionA.appendChild(buttona);
                        buttona.addEventListener("click",function(event){
                        
                        
                        
                        if ( check0 == myquestions[3]["correctanswer"] ){
                            mainEl.textContent= "correct answer";
                            question5();
                            score++
                        }
                        else{
                        
                            mainEl.textContent=" incorrect answer";
                            question5();
                            score--;
                            secondsLeft= secondsLeft- 15;
                        }
                        });
                        
                        
                        var buttonb = document.createElement("button");
                        buttonb.textContent= myquestions[3]["answers"][1];
                        var check1= myquestions[3]["answers"][1];
                        optionB.appendChild(buttonb);
                        buttonb.addEventListener("click",function(event){
                        
                        
                        
                        if ( check1 == myquestions[3]["correctanswer"] ){
                            mainEl.textContent= "correct answer";
                            question5();
                            score++
                        }
                        
                        else{
                        
                            mainEl.textContent=" incorrect answer";
                            question5();
                            score--;
                            secondsLeft= secondsLeft- 15;
                        }
                        });
                        
                        var buttonc = document.createElement("button");
                        buttonc.textContent= myquestions[3]["answers"][2];
                        var check2 = myquestions[3]["answers"][2];
                        optionC.appendChild(buttonc);
                        buttonc.addEventListener("click",function(event){
                        
                        
                        if ( check2 == myquestions[3]["correctanswer"] ){
                            mainEl.textContent= "correct answer";
                            question5();
                            score++
                        }
                        
                        else{
                        
                            mainEl.textContent=" incorrect answer";
                            question5();
                            score--;
                            secondsLeft= secondsLeft- 15;
                        }
                        });
                        
                        var buttond = document.createElement("button");
                        buttond.textContent= myquestions[3]["answers"][3];
                        var check3 = myquestions[3]["answers"][3];
                        optionD.appendChild(buttond);
                        buttond.addEventListener("click",function(event){
                        
                        
                        if ( check3 == myquestions[3]["correctanswer"] ){
                            mainEl.textContent= "correct answer";
                            question5();
                            score++
                        }
                        
                        else{
                        
                            mainEl.textContent=" incorrect answer";
                            question5();
                            score--;
                            secondsLeft= secondsLeft- 15;
                        }
                        });
                        }        
    function question5(){
                            optionA.removeChild(optionA.childNodes[0]);
                            optionB.removeChild(optionB.childNodes[0]);
                            optionC.removeChild(optionC.childNodes[0]);
                            optionD.removeChild(optionD.childNodes[0]);
                            
                            
                        
                                tittleEl.innerHTML = myquestions[4]["question"];
                               
                                var buttona = document.createElement("button");
                                buttona.textContent= myquestions[4]["answers"][0];
                                var check0 = myquestions[4]["answers"][0];
                                optionA.appendChild(buttona);
                                buttona.addEventListener("click",function(event){
                                
                                
                                
                                if ( check0 == myquestions[4]["correctanswer"] ){
                                    mainEl.textContent= "correct answer";
                                    timeOut();
                                    score++
                                }
                                else{
                                
                                    mainEl.textContent=" incorrect answer";
                                    timeOut();
                                    score--;
                                    secondsLeft= secondsLeft- 15;
                                }
                                });
                                
                                
                                var buttonb = document.createElement("button");
                                buttonb.textContent= myquestions[4]["answers"][1];
                                var check1= myquestions[4]["answers"][1];
                                optionB.appendChild(buttonb);
                                buttonb.addEventListener("click",function(event){
                                
                                
                                
                                if ( check1 == myquestions[4]["correctanswer"] ){
                                    mainEl.textContent= "correct answer";
                                    timeOut();
                                    score++
                                }
                                
                                else{
                                
                                    mainEl.textContent=" incorrect answer";
                                    timeOut();
                                    score--;
                                    secondsLeft= secondsLeft- 15;
                                }
                                });
                                
                                var buttonc = document.createElement("button");
                                buttonc.textContent= myquestions[4]["answers"][2];
                                var check2 = myquestions[4]["answers"][2];
                                optionC.appendChild(buttonc);
                                buttonc.addEventListener("click",function(event){
                                
                                
                                if ( check2 == myquestions[4]["correctanswer"] ){
                                    mainEl.textContent= "correct answer";
                                    timeOut();
                                    score++
                                }
                                
                                else{
                                
                                    mainEl.textContent=" incorrect answer";
                                    timeOut();
                                    score--;
                                    secondsLeft= secondsLeft- 15;
                                }
                                });
                                
                                var buttond = document.createElement("button");
                                buttond.textContent= myquestions[4]["answers"][3];
                                var check3 = myquestions[4]["answers"][3];
                                optionD.appendChild(buttond);
                                buttond.addEventListener("click",function(event){
                                
                                
                                if ( check3 == myquestions[4]["correctanswer"] ){
                                    mainEl.textContent= "correct answer";
                                    timeOut();
                                    score++
                                }
                                
                                else{
                                
                                    mainEl.textContent=" incorrect answer";
                                    timeOut();
                                    score--;
                                    secondsLeft= secondsLeft- 15;
                                }
                                });
                                }        
        

function timeOut() {
    optionA.removeChild(optionA.childNodes[0]);
    optionB.removeChild(optionB.childNodes[0]);
    optionC.removeChild(optionC.childNodes[0]);
    optionD.removeChild(optionD.childNodes[0]);
    
  mainEl.textContent= " ";  
  buttonPlaceEL.remove();
  timeEl.textContent = "time:0" ;
  tittleEl.textContent = "All Done!";
  ScoreResultEl.textContent = "Your Score is:"+ (score+secondsLeft)

  
  yournameinput.textContent= "please put your name";
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value","your name");
  x.setAttribute("id","input");
  placeholdername.appendChild(x);

  var submitbutton = document.createElement("button");
  submitbutton.textContent= "Submit";
//   var check3 = myquestions[4]["answers"][3];
  placeholdername.appendChild(submitbutton);
//  submitbutton.addEventListener("click",function(event){
    // event.preventDefault();
        // tittleEl.textContent = " ";
        // tittleEl.textContent = "Highscores";
   submitbutton.onclick = saveHighscore;     
//  }
// }
}
function saveHighscore(){

    var name = document.getElementById("input").value;
    mainEl.innerHTML = name;

    
    console.log(name);
}



principal();
// setTime();