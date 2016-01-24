function inicio(){
	console.log("Has entrado en la pagina inicio");

	// Agregamos aqui un delay de 10 segundos para ver el codigo bloqueante de NodeJS
	// Ya que este ses ejecuta en un solo hilo
	var ahora = new Date().getTime();
	while(new Date().getTime() < ahora + 10000);
	return "Inicio";
}

function pagina1(){
	console.log("Has entrado en la pagina pagina1");
	return "pagina1";
}

function pagina2(){
	console.log("Has entrado en la pagina pagina2");
	return "pagina2";
}

function favicon(){
	console.log("Has solicitado Favicon");
	return " ";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;