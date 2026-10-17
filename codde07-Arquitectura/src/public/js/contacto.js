

//1. Capturamos el formulario por el id
let contactoForm = document.getElementById("contactoForm");

//2. Agregamos el evento al formulario
contactoForm.addEventListener('submit', (event)=>{
  // Evitamos que el formulario se envíe sin datos
  event.preventDefault();

  //Capturamos los datos del formulario
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let pais = document.getElementById("pais").value;
  let provincia = document.getElementById("provincia").value;
  let comentario = document.getElementById("comentario").value;

  // Creamos un Objeto con los datos
  let contacto = {
    nombreContacto: nombre,
    emailContacto: email,
    telefonoContacto: telefono,
    paisContacto: pais,
    provinciaContacto: provincia,
    comentarioContacto: comentario,
  }

  //3. Envio los datos al backend
  fetch('http://localhost:8080/contacto',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contacto)    
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

  
});