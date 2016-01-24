function inicio(respuesta){
	console.log("Has entrado en la pagina inicio");

	// Agregamos aqui un delay de 10 segundos para ver el codigo bloqueante de NodeJS
	// Ya que este ses ejecuta en un solo hilo
	var ahora = new Date().getTime();
	while(new Date().getTime() < ahora + 10000);
	// - - - - 
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Esta es la pagina de inicio");
	respuesta.end();

}

function pagina1(respuesta){
	console.log("Has entrado en la pagina pagina1");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Pagina 1");
	respuesta.end();
}

function pagina2(respuesta){
	console.log("Has entrado en la pagina pagina2");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("Pagina 2");
	respuesta.end();
}

function favicon(respuesta){
	console.log("Has solicitado Favicon");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("El Favicon");
	respuesta.end();
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;