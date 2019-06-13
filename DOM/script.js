function changeColor(){
	document.getElementById("p1").style.color = "blue";
	document.getElementById("p2").style.color = "yellow";
	document.getElementById("p3").style.color = "red";
}
changeColor();

function changeBgColor(color){
	document.body.style.backgroundColor = color;
}

changeBgColor("#c6cad5");

function copyContent(paragraph1, paragraph2){
	paragraph1.innerHTML=paragraph2.innerHTML;
}
copyContent(p1,p2);


function changeFontSize(x){
	document.getElementById("p1").style.fontSize = x;
}
changeFontSize('10px');

function increaseFontSize(id){
	let txt = document.getElementById(id);
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    if (currentSize<30) {
    	txt.style.fontSize = (currentSize + 1) + 'px';
    }
}

function decreaseFontSize(id){
	let txt = document.getElementById(id);
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    if (currentSize>1) {
    	txt.style.fontSize = (currentSize - 1) + 'px';
    }
}
