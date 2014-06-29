/*
 * Autor
 */

//Requiere al módulo http que viene incluido con Node.js y lo hace accesible a través de la variable http.
var http = require("http");
var url = require("url");

function iniciar() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Petición para " + pathname + " recibida.");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;