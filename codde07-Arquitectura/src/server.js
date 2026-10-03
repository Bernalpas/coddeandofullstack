//Importamos lo módulos/paquetes/librerías que necesitamos
const express = require("express");  //crea el backend
const dotenv = require("dotenv");  //guarda y lee las variables de entorno
const app = express(); //creamos la app de express
dotenv.config(); //ejecuta la configuración de las variables de entorno

const PORT = process.env.PORT || 3000;

//console.log(process);

console.log(process.env.GOOGLE_EMAIL);

app.get("/", (req, res) => {
  res.send(`
    <h1 style="color: blue; margin-top: 50px; text-align: center;">
      Mi Back Arquitectura funciona correctamente
    </h1>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

