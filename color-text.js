//// 2.6

function ColorText() {
	document.getElementById("page__set-color-text").innerHTML = "";
	let text = document.getElementById("page__get-color-text").value;
	let colors = ["#C00808", "#C0A417", "#64C008", "#0FC08B", "#085EC0", "#570BC0","#9000C0","#C0086A"];
	for (let i = 0; i < text.length; i++) 
    {
		let temp = document.createElement('span');
		temp.innerHTML = text[i];
		temp.style.color = colors[i % colors.length];
		document.getElementById("page__set-color-text").appendChild(temp);
    }
}

button = document.getElementById("page__go-color-text")
button.addEventListener('click', ColorText);