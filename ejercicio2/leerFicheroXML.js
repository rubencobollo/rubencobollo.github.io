function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	let whatsapp = xmlDoc.querySelectorAll("conversacion")
	for(let i=0; i<conversacion.length; i++)
	{
			capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + conversacion[i].textContent + "</p>"
	}
}

function CargarFichero()
{
	loadDocA("whatsapp.xml","xml")
}
setInterval(CargarFichero,5000)
