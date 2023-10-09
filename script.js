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
	if (document.getElementById(infoid).style.height == 0){
		document.getElementById(infoid).style.height = "7rem"
	} else {
		document.getElementById(infoid).style.height = 0
	}
}
function abrir(id){
	document.getElementById("patos").style.display = "none"
	fetch('./info.json')
    .then((response) => response.json())
    .then((json) =>{
	json[id].tarjetas.forEach((tarjeta) => {
		
		document.querySelector("#patoinfo").innerHTML = document.querySelector("#patoinfo").innerHTML + `
	<div class = "tarjeta" onclick = "info('${tarjeta.id}')">
		<p>${json[id].subtitulo}<p>
		<div class = "acordeon" id = "${tarjeta.id}"> 
			<p> ${tarjeta.texto} <p>
		</div>
	</div>`})}
	
	)
	/*
	- quitar las tarjetas ✓
	- abrir el json ✓
	- levantar info del json segun la id
	- crear un div con la info y colocarlo en #patoinfo
	*/
//	patoinfo.innerHTML = '<img src=' + json[0].url + '>'
	
}