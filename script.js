var square = document.getElementById("square")
const colors = ["red", "green", "blue"]

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

function changecolor() {
	square.style.backgroundColor = colors[getRandomInt(3)]
}

function togglevisible() {
let patos = document.getElementsByClassName("patopareja")
	if(patos[1].style.display == "inline-block") {
		patos[1].style.display = "none"
	} else {
		patos[1].style.display = "inline-block"
	}
}
let tInfo = 0
function infopatos() {
	if (tInfo == 0){
		document.getElementById("patoinfo").style.display = "block"
		tInfo = 1
	} else {
		document.getElementById("patoinfo").style.display = "none"
		tInfo = 0
	}
}