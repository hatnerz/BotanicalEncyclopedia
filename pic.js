//// 1.2

let button = document.getElementById("picture__start");
let pic = document.getElementById("picture__move");
function MovePicture()
{
    pic.style.top = Math.random() * 90 + "%";
    pic.style.left = Math.random() * 90 + "%";
}
let timer;
let setTimer = true;
function StartPicture() {
    if(setTimer) {
        timer = setInterval(MovePicture,1000);
        setTimer=false;
    }
    else {
        clearTimeout(timer);
        setTimer=true;
    }
} 

button.addEventListener('click', StartPicture)