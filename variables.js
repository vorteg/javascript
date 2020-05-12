// This code is for evaluate variable value

var a;
console.log('El valor de a es ' + a); // El valor de a es undefined

console.log('El valor de b es ' + b); // El valor de b es undefined
var b;

console.log('El valor de c es ' + c); // Uncaught ReferenceError: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined

console.log('El valor de y es ' + y); // Uncaught ReferenceError: y no está definida
let y;

// ---------------------------------------------------------------
var input;
if(input === undefined){
  hazEsto();
} else {
  hazEso();
}

//-----------------------------------------------------------------
var myArray = new Array();
if (!myArray[0]) myFunction(); 
//-----------------------------------------------------------------
var a;
a + 2; // Se evalua a NaN
//-----------------------------------------------------------------
var n = null;
console.log(n * 32); // Va a lanzar 0 a la consola