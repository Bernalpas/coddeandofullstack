
// 1. Importamos todos los módulos que necesitamos para la app
const os = require('node:os') // Módulo nativo de Node: ya lo tiene Node.Js

console.log(os.cpus()); // imprime la cantidad de cpus
console.log(os.freemem()); // imprime la cantidad de memoria libre
console.log(os.totalmem()); // imprime la cantidad total de memoria
console.log(os.version()); // imprime la version del sistema operativo

// 2. Imprtamos un módulo que Node.Js no tiene 
// Instalar solamente librerías de sitio seguros y oficiales
// Lo instalamos con el comando npm install express o npm i express


// 3. Creamos la variables para la app
const express = require('express');
// ejecutamos el módulo express
const app = express();

// importamos una librería llamada path para trabajar con rutas
const path = require('node:path');

// Creamos una varible para el Puerto
const Port = 8080;

// CONFIGURAMOS EL SERVIDOR DE EXPRESS PARA QUE SIRVA ARCHIVOS Y DATOS
app.use(express.static(path.join(__dirname, "./public"))); // carpeta de archivos estáticos en public

// Creamos una entrada de petición get
// get: verbo http para obtener información
// /hola: ruta de la app
// (req, res) => función de callback que se ejecuta cuando se hace la petición
app.get('/hola', (peticion, respuesta)=>{
  
  // podemos enviar de respuesta texto plano
  respuesta.send("Bienvenido a la Ventana de /Hola");

});

// enviamos un html de respuesta
app.get('/html', (peticion, respuesta) =>{
  
  // podemos enviar de respuesta html
  respuesta.send(`
  <html>
    <head>
      <title>Respuesta del Back</title>
    </head>
    <body>
      <h1>Buenas, soy la respuesta del Back</h1>
      <form action="/submit" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required>
        <br>
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" required>
        <br>
        <input type="submit" value="Enviar">
      </form>
    </body>
  </html>
`);
});

app.get("/objeto", (peticion, respuesta) => {

  // podemos enviar objetos de respuesta
  respuesta.send({
    nombre: "Pepe",
    edad: 30,
  })

});

app.get("/pdf", (peticion, respuesta) => {
  // podemos enviar archivos pdf de respuesta
  respuesta.sendFile(path.join(__dirname, "./public", "hola.pdf"));
});

app.get("/home", (peticion, respuesta) => {
  
  // podemos enviar archivos html de respuesta
  respuesta.sendFile(path.join(__dirname, "./public", "index.html"));
});



// creamos la función que arranca el servidor
app.listen(Port, ()=>{
  console.log(`Servidor corriendo en el puerto http://localhost:${Port}`);
});





