let time = 10000;
setTimeout(setText,time);
let timer = setInterval(updateTime,1000);
let toSetText = document.getElementById("page__timer-set-text");

function setText()
{
    clearInterval(timer);
    toSetText.textContent = "Час сплив.";
    alert("Час закінчився");
}


function updateTime()
{
    time-=1000;
    hours = Math.floor((time / 3600000) % 24);
    if(hours>24) hours = hours-24;
    if(hours<10) hours = "0" + hours;
    else hours = String(hours);
    mins = Math.floor((time / 60000) % 60)
    if(mins<10) mins = "0" + mins;
    else mins = String(mins);
    secs = Math.floor((time / 1000) % 60)
    if(secs<10) secs = "0" + secs;
    else secs = String(secs);
	toSetText.textContent = hours + ":" + mins + ":" + secs;
}