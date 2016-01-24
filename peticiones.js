function inicio(){
	console.log("Has entrado en la pagina inicio");
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