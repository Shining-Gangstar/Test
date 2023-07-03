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

function infopatos() {
	if (document.getElementById("patoinfo").style.height == "0px"){
		document.getElementById("patoinfo").style.height = "7rem"
		console.log("a")
	} else {
		document.getElementById("patoinfo").style.height = "0px"
		console.log("b")
	}
}