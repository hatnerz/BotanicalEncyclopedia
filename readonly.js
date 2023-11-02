/// 3.6

document.onselectstart=function(){return false}
document.addEventListener("copy", function (evt) {
	evt.preventDefault();
}, false);