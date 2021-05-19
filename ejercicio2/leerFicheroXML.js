function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	let whatsapp = xmlDoc.querySelectorAll("conversacion")
	for(let i=0; i<whatsapp.length; i++)
	{
			capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + whatsapp[i].textContent + "</p>"
	}
}

function CargarFichero()
{
	loadDocA("whatsapp.xml","xml")
}
setInterval(CargarFichero,5000)
