
function writeAndReadFunc(objeto_recibido) {

    const fs = require("fs");
    
    let nuevoobjeto = JSON.stringify(objeto_recibido);
    let data = nuevoobjeto;
    
    fs.writeFile("ficheronuevo.json", data, (err) => {
        if (err)
        console.log(err);
        else {
           console.log("Archivo creado correctamente");
           console.log("El archivo tiene los siguientes datos:");
           }
     });
     
     fs.readFile("ficheronuevo.json", "utf-8", (err, data) => {
        if (err) {
           console.log(err);
        }
        console.log(JSON.parse(data));
     });
    
    }

    module.exports = {writeAndReadFunc}