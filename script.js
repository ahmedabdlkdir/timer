let btnStart = document.querySelector('.btn-start');
let btnReset = document.querySelector('.btn-reset');
let btnStop = document.querySelector('.btn-stop');
let displayHrs = document.querySelector('.hours');
let displaySecs = document.querySelector('.seconds');
let dislayMins = document.querySelector('.minutes');

let counter = 0;
let interval = null;
let hrs = 0;
let mins = 0;
let secs = 0;

btnStart.addEventListener('click', startTimer)
btnReset.addEventListener('click', resetTimer)
btnStop.addEventListener('click', stopTimer)


function timer(){
    counter++;

    hrs = Math.floor( counter / 3600);
    mins = Math.floor((counter % 3600) / 60);
    secs = counter % 60;


    hrs = hrs < 10 ? "0" + hrs : hrs;
    displayHrs.innerHTML = hrs;

    mins = mins < 10 ? "0" + mins : mins;
    dislayMins.innerHTML = mins;

    secs = secs < 10 ? "0" + secs : secs;
    displaySecs.innerHTML = secs;


}

function startTimer(){
    clearInterval(interval);
    interval = setInterval(timer,1 );
}

function resetTimer(){ 
    stopTimer();
    displayHrs.textContent = "00";
    dislayMins.textContent = "00";
    displaySecs.textContent =  "00";
    counter = 0;
    hrs = 0;
    mins = 0;
    second = 0;

}

function stopTimer(){
     clearInterval(interval);
}