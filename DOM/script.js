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

function copyContent(x, y){
    const p1=document.getElementById(x);
    const p2=document.getElementById(y);
    p1.innerHTML = p2.innerHTML;
}
copyContent('p1','p2');


function changeFontSize(x){
    //document.getElementById("p1").style.fontSize = x +'px';
    /*document.getElementsByTagName("p")[0].style.fontSize=x+"px";
    document.getElementsByTagName("p")[1].style.fontSize=x+"px";
    document.getElementsByTagName("p")[2].style.fontSize=x+"px";*/

    let p=document.getElementsByTagName("p");
    for (var i = 0; i < p.length ; i++) {
        p[i].style.fontSize=x+"px";
    }
}
changeFontSize(10);


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
