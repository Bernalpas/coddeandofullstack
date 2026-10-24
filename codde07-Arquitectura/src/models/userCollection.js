//1. Importamos mongoose
const mongoose = require('mongoose');

//2. Importamos el Schema
const { Schema } = mongoose;

//3. Creamos la estructura de la colección
const userSchema = new Schema({
  nombreContacto:{
    type: String,
    required: true
  },
  emailContacto:{
    type: String,
    required: true
  },
  telefonoContacto:{
    type: String,
    required: true
  },
  paisContacto:{
    type: String,
    required: true
  },
  provinciaContacto:{
    type: String,
    required: true
  },
  comentarioContacto:{
    type: String,
    required: true
  },
})

//4. Asignamos un nombre a la colección
const User = mongoose.model('User', userSchema);

//5. Exportamos la colección
module.exports = User;
