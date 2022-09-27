// document.getElementById("changeGreen").onclick = function(){
// 	document.getElementById("output").style.color = 'green';
//     document.getElementById("output").style.color = 'red';
// }

// document.getElementById("changeRed").onclick = function(){
// 	document.getElementById("output").style.color = 'red';
// }


"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'black') {
		document.body.style.color = 'gold';
	} 
    else if(color == 'gold') {
		document.body.style.color = 'salmon';
	}
    else if(color == 'salmon') {
		document.body.style.color = 'darkorange ';
	}
    else{
        document.body.style.color = 'black';
    }
}