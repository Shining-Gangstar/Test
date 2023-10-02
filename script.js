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

function info(infoid) {
	if (document.getElementById(infoid).offsetHeight == 0){
		document.getElementById(infoid).style.height = "7rem"
	} else {
		document.getElementById(infoid).style.height = "0px"
	}
}
let midata
function abrir(id){
	document.getElementById("patos").style.display = "none"
	fetch('./info.json')
    .then((response) => response.json())
    .then((json) => {document.querySelector("#patoinfo").innerHTML = `
	<div class = "tarjeta" onclick = "info(${json[id].tarjetas[0].id})">
		<p>${json[id].subtitulo}<p>
		<div class = "acordeon" id = "${json[id].tarjetas[0].id}"> 
			<p> mesi <p>
		</div>
	</div>`; console.log(json);  midata = json;})
	/*
	- quitar las tarjetas ✓
	- abrir el json ✓
	- levantar info del json segun la id
	- crear un div con la info y colocarlo en #patoinfo
	*/
//	patoinfo.innerHTML = '<img src=' + json[0].url + '>'
	
}