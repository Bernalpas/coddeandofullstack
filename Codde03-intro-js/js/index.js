

console.log("3. Hola desde un archivo externo");


// Esta es la forma de comentar un código en JavaScript o comentar códigos

// Este es un comentario de una sóla línea

/* 
todo lo que 
comente en estas líneas
no se ejecutan en el navegado
esto es un comentario de varias líneas
*/

//=======================================
// 1. Variables en JS
//=======================================

//Variable: espacio de memoria para guardar info

// 1. Variables con var

// palabra reservada - nombre de la variable: esto es Declaración de Variable
           var             cajadejuguetes; 

var cajadelibros;

// Asignamos datos a las variables

// nombre de variable - signo de igual - info a guarda en la variable
      cajadelibros          =               "El Señor de los Anillos - Capítulo I"   
      cajadejuguetes        =               "Autito de Colapinto"   

// Usamos las variables para lo que necesitemos: la buscamos con el nombre que le asignamos

// Imprimimos en consola lo que tengo en cada caja
console.log(cajadelibros);
console.log(cajadejuguetes);

var cajadejuguetes = "Hola"

console.log(cajadejuguetes);// Evitar usar var para no pisar las variables anteriores

//========================================================================================
// 2. Variables con let
//========================================================================================

console.log("=========================================");
console.log("=========================================");

// crear una variable con let
let persona;

// le asigno un valor a esta variable
persona = "Enzo"

//imprimimos 
console.log(persona);


// crear una variable y asignarle un valor
let provincia = "Mendoza"

//No puedo redeclarar la variable persona, ya existe y me tira error
//let persona = 25256478

//Si se puede reasignar el valor
persona = 123456789

console.log(persona);

let edad; // declaro la variable, pero no le asigno un valor

console.log(edad); //undefined


//======================================================================================
// 3. Variables con const => para datos que no cambian nunca
//======================================================================================

console.log("=========================================");
console.log("=========================================");

// Las const se deben asignar cuando se declaran
const DNI = 999999999

console.log(DNI);

//no podemos reasignar DNI con const
//DNI = "pepe@gmail.com"

// no podemos redeclarar DNI con const
//const DNI = "Mario Pérez"

// no iniciar una variable con símbolos
//let @12354 = 123456789

// no inicar con números
//var 123456 = "Pepe"

// no agregar espacios en blanco en las variables
//const hola cliente = "Bienvenido al Negocio"
















