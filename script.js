var square = document.getElementById("square")
const colors = ["red", "green", "blue"]

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function changecolor() {
	square.style.backgroundColor = colors[getRandomInt(3)]
}
let patos = document.getElementsByClassName("patopareja")
function togglevisible() {
	if(patos[1].style.display == "inline-block") {
		patos[1].style.display = "none"
	} else {
		patos[1].style.display = "inline-block"
	}
}

function infopatos() {
	if (document.getElementById("patoinfo").offsetHeight == 0){
		document.getElementById("patoinfo").style.height = "7rem"
	} else {
		document.getElementById("patoinfo").style.height = "0px"
	}
}