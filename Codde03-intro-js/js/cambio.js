

// Nuestra app de cambio de moneda

// 1. Creamos las variables

let pesoArgentino 

let pesoChileno 

let dolarAmericano 

// 2. Le asignamos los valores

pesoArgentino = 1550
pesoChileno = 1010
dolarAmericano = 88

let cambioPesoArgentino = false
let cambioPesoChileno = false


//3. Lógica del negocio / condicional if => si

if(cambioPesoArgentino){

  let cambiar = dolarAmericano * pesoArgentino

  console.log("Te damos: " + cambiar + " pesos argentinos");
  

}

if(cambioPesoChileno){
  let cambiar = dolarAmericano * pesoChileno
  console.log(`Te damos ${cambiar} pesos chilenos`);
  
}


// estructura del if
//if(valor a evaluar: verdadero o falso){

  //aquí va todo el código que se ejecuta cuando es verdadero

//}







