//*****EJERCICIO 1 ********/
/* Pedir 3 nombres y su edad correspondientes, para después mandar 
por mensaje al que tiene más edad */


/* var nombre1 = prompt('Ingresa el 1er nombre:');
var edad1 = prompt('Ingresa la 1ra edad');


var nombre2 = prompt('Ingresa el 2do nombre:');
var edad2 = prompt('Ingresa la 2da edad');


var nombre3 = prompt('Ingresa el 3er nombre:');
var edad3 = prompt('Ingresa la 3ra edad');


if (edad1 > edad2 && edad3) {
    alert('El que tiene mas edad es: ' + nombre1 + ' con edad de ' + edad1);
}

if (edad2 > edad1 && edad3) {
    alert('El que tiene mas edad es: ' + nombre2 + ' con edad de ' + edad2);
}

if (edad3 > edad2 && edad1) {
    alert('El que tiene mas edad es: ' + nombre3 + ' con edad de ' + edad3);
} */


//*****EJERCICIO 2 ********/

/* Pedir el nombre del alumno y si:
el nombre es “Pedro” tiene de calificación 8
el nombre es “María” tiene de calificación 10
el nombre es “Juanita” tiene de calificación 7 */


/* 
var nombre = prompt('Ingresa el nombre del Alumno');
var alumno1 = 'Pedro';
var alumno2 = 'Maria';
var alumno3 = 'Juanita';

if(nombre == alumno1){
    alert(alumno1 + ' Tiene una calificacion de 8');
}

if (nombre == alumno2){
    alert(alumno2 + ' Tiene una calificacion de 10');
}

if (nombre == alumno3){
    alert(alumno3 + ' Tiene una calificacion de 7');
} */


//*****EJERCICIO 3 ********/

/* Pedir el número de aciertos en el examen y si:
Más de 30 aciertos es igual a 6
Más de 40 aciertos es igual a 8
Más de 50 aciertos es igual a 10
Menos o igual de 30 aciertos es igual a 5 */


/* var aciertosTotales = prompt('Ingresa el numero de aciertos que obtuviste en el examen');
var aciertosMinimos = 30;
var aciertosMedios = 40;
var aciertosMaximos = 50;

if(aciertosTotales == aciertosMinimos){
    alert('Obtuviste una calificacion de 6');
}
if(aciertosTotales == aciertosMedios){
    alert('Obtuviste una calificacion de 8');
}
if(aciertosTotales == aciertosMaximos){
    alert('Obtuviste una calificacion de 10');
    alert('Felicidades Campeon!')
} */

//*****EJERCICIO 4 ********/

// Pedir dos números y mostrar cual es mayor

/* var num1 = prompt('Ingresa el primer numero');
var num2 = prompt('Ingresa el segundo numero');

if (num1 > num2){
    alert( num1 + ' es el mayor');
}else if(num1 == num2){
    alert('Los numeros son iguales');
}  else{
    alert(num2 + ' es el mayor')
} */


//*****EJERCICIO 5 ********/

// Pedir 2 números y mostrar el menor

/* var num1 = prompt('Ingresa el primer numero');
var num2 = prompt('Ingresa el segundo numero');

if (num1 < num2){
    alert( num1 + ' es el menor');
}else if(num1 == num2){
    alert('Los numeros son iguales');
}  else{
    alert(num2 + ' es el menor')
}
 */


//*****EJERCICIO 6 ********/

/* Preguntar cúal es la contraseña secreta (“Pay de Manzana”) y 
si es correcto dejarlo entrar en caso de que no mostrar un 
mensaje de Sigue participando */

/* var password = 'Pay de Manzana';

var pregunta = prompt('Para entrar al club deberas colocar la contraseña correcta 7u7');

if(password == pregunta){
    alert('Bienvenido puedes pasar');
}else{
    alert('Sigue participando JIJIJIJA');
}
 */



//*****EJERCICIO 7 ********/

var num1 = prompt('Ingrese un numero para saber si es par o inpar');


if(num1 % 2 == 0){
    alert(num1 + ' es par');
} else{
    alert(num1 + ' es inpar');
}





