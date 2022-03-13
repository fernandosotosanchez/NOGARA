// Variables 


// aqui declaramos y asignando al mismo tiempo.
var platos = 10;
// mandar a llmara a acceder a la var

// solo se declara
var cajaVacia;



var contrasena;

contrasena = '1234';

// reasignar variable
contrasena = '12345';


// variables son variables por que varian XD.

var num1 = 12;

var num2 = 76;

var num3 = num1 - 1;
var num4 = num1;

var total = num1 + num2;

// *********** TIPOS DE DATOS ****************

// tipado de datos.
// crear variables que solo aceptan ciertos tipos de datos.
// numeros: int, float, double

var entero = 67;

var flotante = 12.4;


// string, cadenas de texto

//declarar variable vacia de tipo string
// var nombre = '';
// console.log(nombre);


// Booleanos son valores son True o False.


var muerto = true;

var vivo = true;

//condicional: una condicion.

// if (muerto) {

//     console.log('F');

// }


// if (vivo) {
//     console.log('Estoy vivo');
// }


/* crear un algoritmo:
Crear 3 productos con su precio
Cartera 50usd

si compro papas cuestan 5usd 
me quedan 45usd.
*/

var coca = 25;

var gansito = 10;

var pinol = 20;

var cartera = 50;

var cambio = cartera-coca ;

/* if (coca < cartera) {
console.log('Si puedes comprar el producto, te quedan ' + cambio);
}
 */


// *********OPERADORES ARITMETICOS***********//

// mayor que >
// menor que <
// igual que ==
// mayor igual que >=
// menor igual que <=
var num1 = 1234;

var num2 = 1234;

/*  if (num1 == num2) {
     //cuando se ejuta esto es verdadero
     console.log('Bienvenido contrasena correcta');
 } else{
     //cuando se ejecuta esto es falso
     console.log('Contrasena incorrecta');
 } */
 



 /* crear un algoritmo:
 simmular un Bar 
 Si el cliente es menor que 18 no lo dejas entrar y si es mayor si */


 var edad = 21;

 var mayorEdad = 18;

 var menorEdad =17;

/*  if(edad >= mayorEdad) {
     console.log('Puedes ingresar, Bienvenido');
 } else{
     console.log('Lo sentimos no puedes entrar');
 }


 if(edad == menorEdad){
     console.log('No puedes pasar ');
 } else {

 }
  */

 /*OPERADOR 
      !=  diferente de 
      */
   //console.log(5 != '5');

   // prompt ,confirm

var usuario1 = 'Fer';


var pregunta=prompt('Ingresa tu Usuario');


if(pregunta == usuario1){
    console.log('Bienvendio');
}else{
    console.log('Error inicio de sesion');
}