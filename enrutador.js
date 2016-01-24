function enrutar(manejador,ruta){
	console.log("Voy a rutear algo para "+ruta);

	if (typeof manejador[ruta] === 'function') {
		return manejador[ruta]();
	} else {
		console.log("No existe una funcion para esa ruta:"+ruta);
	};	
}

exports.enrutar = enrutar;