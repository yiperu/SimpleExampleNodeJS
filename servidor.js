var servidor = require('http');
var url = require('url');

function iniciar(enrutar,manejador){
	function arrancaServidor(require, respuesta) {

		var ruta = url.parse(require.url).pathname;
		console.log("Alguien se ha conectado.")
		var contenido = enrutar(manejador,ruta);

		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write(contenido);
		respuesta.end();
	}
	servidor.createServer(arrancaServidor).listen(8888);
}

exports.iniciar = iniciar;
