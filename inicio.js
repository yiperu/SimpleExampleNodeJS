var servidor = require("./servidor");
var enrutador = require("./enrutador");
var peticiones = require("./peticiones");

var manejador = {};
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;

servidor.iniciar(enrutador.enrutar,manejador);