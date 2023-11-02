/// 1.4

let clock_par = document.getElementById("interact__clock") 
let hours,mins,secs;
function Clock() {
    let now = Date.now();
    hours = Math.floor((now / 3600000) % 24 + 3);
    if(hours>24) hours = hours-24;
    if(hours<10) hours = "0" + hours;
    else hours = String(hours);
    mins = Math.floor((now / 60000) % 60)
    
    if(mins<10) mins = "0" + mins;
    else mins = String(mins);
    secs = Math.floor((now / 1000) % 60)
    if(secs<10) secs = "0" + secs;
    else secs = String(secs);
	clock_par.textContent = hours + ":" + mins + ":" + secs;
}

setInterval(Clock,1000)