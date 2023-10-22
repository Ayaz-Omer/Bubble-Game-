var timer = 60;
var score = 0;
var hitnm = 0;

function newHit() {
    hitnm = Math.floor(Math.random()* 10);
    document.querySelector("#hitval").textContent = hitnm ;
}

function makeBubble() {
    var clutter ="";

for(var i = 1; i<145; i++){
    var rn = Math.floor(Math.random()* 10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;

}

function runTimer(){

var stopTimer = setInterval(function() {

        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
            
        }
        else{
            clearInterval(stopTimer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }

    }, 1000);
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var bubClicked = Number(dets.target.textContent);

    if(bubClicked === hitnm){
        increaseScore();
        makeBubble();
        newHit();
    }

})

newHit();
makeBubble();
runTimer();
