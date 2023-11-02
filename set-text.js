//// 1.1

let text_block = document.getElementById("task1-1__set-text");
let button = document.getElementById("task1-1__change-text");

function PlaceText() {
	let t = document.getElementById("task1-1__get-text").value;
	let s = document.getElementById("task1-1__get-size").value + "px";
	SetText(t,s)
} 

function SetText(text, size)
{
	text_block.style.fontSize = size;
	text_block.textContent = text;

}
button.addEventListener('click', PlaceText)

