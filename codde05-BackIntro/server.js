
//1. Usamos un módulo nativo de Node.js llamado os, que nos permite obtener información del sistema operativo.

//2. Creamos una variable para utilizar el módulo os y obtener información del sistema operativo.

// una carpeta de info
const os = require("node:os");

// una sola info
//const DNI = 123456484;

// fs es un módulo nativo de Node.js que nos permite interactuar con el sistema de archivos.
const fs = require("node:fs"); 


const mercadoPago = require("mercadopago");


// Usamos la variable creada para obtener información del sistema operativo y la mostramos en la consola.

let espacioLibreCompu = os.freemem(); 
let espacioTotalCompu = os.totalmem();

console.log(espacioLibreCompu);
console.log(espacioTotalCompu);

// Usamos el modulo fs para crear un archivo llamado info.txt y escribir en él la información del sistema operativo.

fs.writeFileSync("info.txt", `Espacio libre en la computadora: ${espacioLibreCompu} bytes
Espacio total en la computadora: ${espacioTotalCompu} bytes`);



//4. Usamos la variable creada para obtener información del sistema operativo y la mostramos en la consola.