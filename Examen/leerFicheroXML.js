function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	capaVacia.innerHTML =""
	let cartelera = xmlDoc.querySelectorAll("pelicula")
	let titulos = xmlDoc.querySelectorAll("titulo")
	let directores = xmlDoc.querySelectorAll("director")
	let estrenos = xmlDoc.querySelectorAll("estreno")
	for(let i=0; i<cartelera.length; i++)
	{
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='detalle'>" + cartelera[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + titulos[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + directores[i].textContent + "</p>"
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + estrenos[i].textContent + "</p>"
	}
}

function CargarFichero()
{
	loadDocA("cine.xml","xml")
}
setInterval(CargarFichero,5000)
