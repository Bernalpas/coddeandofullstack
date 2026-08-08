
// 1. String: cadena de caracteres: textos o lo que quiero considerar texto

//Paradigma camelcase
//nombrar variables en minúsculas y la primer letra de la otra palabra en mayúscula

// 1. con doble comillas
let direccionEmpleado = "San Marín 2530"
console.log(direccionEmpleado);


//2. con comillas simples
let direccionUsuario = 'Calle San Juan 3520'
console.log(direccionUsuario);

//3. templete strings => Alt + 96
let direccionSucursales = `CABA - Argentina`
console.log(direccionSucursales);

let direccionProveedorBebidas = 'Córdoba'
console.log(direccionProveedorBebidas);

//const DNI = '123456789' //no lo voy a utilizar matemáticamente
//console.log(DNI);

//Concatenación de datos: agregar texto a las variables para la impresión
console.log("La dirección del Empleado es: " + direccionEmpleado);

console.log('La dirección del Usuario es: ' + direccionUsuario);

//con el templete evito el simbolo de + y agrego llaves y $ para las variables
console.log(`La dirección de la Sucursal es ${direccionSucursales}`);

console.log("============================================");
console.log("============================================");


// 1. Númerico: números para operaciones

let precioPan = 15;

let precioCafe = 25.50

let resultado = 15 + 25.50 

let resultadoVariables = precioPan + precioCafe

console.log(resultado);
console.log(resultadoVariables);

let gaseosa = 3000;
let galletas = 2500
let alfajor = 1800


let pagoCompra = gaseosa + galletas + alfajor;

console.log("El costo toal de la compra es de: " + pagoCompra + " pesos");

// resta y división

pagoCompra = galletas / 2
console.log(pagoCompra);

pagoCompra = gaseosa - 1000
console.log(pagoCompra);

//ejemplo de una librería especializada en matematica
let potencia = Math.sqrt(2,2)
console.log(potencia);

potencia = Math.round(potencia, 2)

console.log(potencia);

console.log(Math.random()*100); // 32
console.log(Math.random()*100); // 90
console.log(Math.random()*100); //35
console.log(Math.random()*100); //50
console.log(Math.random()*100); // 77





















