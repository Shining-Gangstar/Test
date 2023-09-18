fetch("data.json")
.then (function(response){
    return response.json();
 })
 .then (function(Datos){
    let infohtml = document.querySelector("#patoinfo");
    let info = ""
        info += `<div>
        ${Datos[id].data1}
		</div>`;
		console.log(Datos[id].data1)
    infohtml.innerHTML = info;
 });
 guardando el script
