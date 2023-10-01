/* 2. Crear un archivo (datosBici.js). Este archivo será un módulo propio, en el que
debes construir una función que tendrá la responsabilidad de importar el archivo
de (bicicletas.json). Para esto, seguramente nos convenga usar el módulo
nativo de NodeJs. File System - FS.
3. Guardar el contenido del archivo (bicicletas.json) en una variable y convertirla
a un tipo de dato array. ¿Se te ocurre cómo? Te dejamos un enlace para
profundizar sobre el recurso a utilizar.

Este archivo es un módulo propio y por tal motivo una vez que se crea.. ¿Recuerdas
cuál debe ser la última línea del archivo?. */

let fs = require("fs");
//console.log(fs);

let path = require("path"); //No se que es esto
let pathJSON = path.join(__dirname,"bicicletas.json"); //No se que es esto

let biciJSON = fs.readFileSync(pathJSON,"utf-8");
//console.log(biciJSON);

let biciArray = JSON.parse(biciJSON);
//console.log(biciArray);

module.exports=biciArray;