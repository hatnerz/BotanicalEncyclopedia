/// 1.3

let paragraphs = document.getElementsByTagName("p");
button = document.getElementById("page__button-change-par");

function ChangePar() {
    for(let i = 0; i<paragraphs.length; i++)
        paragraphs[i].setAttribute("style", "font-size: 15px");
} 

button.addEventListener('click', ChangePar)

