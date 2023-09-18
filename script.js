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

function abrir(id){
	//document.getElementById("patos").style.display = "none"
	fetch("data.json")
.then (function(response){
    return response.json();
 })
 .then (function(Datos){
    let infohtml = document.querySelector("#patoinfo");
    let info = ""
        info += `<div>
        ${Datos[0].data1}
		</div>`;
		console.log(Datos[0].data1)
    infohtml.innerHTML = info;
 });
	/*
	- quitar las tarjetas
	- abrir el json
	- levantar info del json segun la id
	- crear un div con la info y colocarlo en #patoinfo
	*/
//	patoinfo.innerHTML = '<img src=' + json[0].url + '>'
	
}