function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	//let whatsapp = xmlDoc.querySelectorAll("conversacion")
	let emisor = xmlDoc.querySelectorAll("mensaje1")
	let receptor = xmlDoc.querySelectorAll("mensaje2")
	for(let i=0; i<emisor.length; i++)
	{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + emisor[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + receptor[i].textContent + "</p>"

	}
}

function CargarFichero()
{
	loadDocA("whatsapp.xml","xml")
}
setInterval(CargarFichero,5000)
