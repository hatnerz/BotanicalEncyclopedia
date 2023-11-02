/// 1.5
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

button = document.getElementById("page__button-filter");
let elements
function Filter() {
	timer = setInterval(ClearElement, 1000)
}

function ClearElement()
{
    elements = document.getElementsByTagName("section");
    console.log(elements);
    elements = elements[0].getElementsByTagName("*");
    if(elements.length>0)
        elements[getRandomInt(elements.length)].remove();
    else
        clearTimeout(timer)
}

button.addEventListener('click', Filter)