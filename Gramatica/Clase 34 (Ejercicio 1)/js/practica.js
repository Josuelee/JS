/* primer ejercicio */
let texto1 = "Hola a todos",
texto2 = "Hola mundo",
texto3 = "Hola que tal",
texto4 = "CursoJS "

const primerEjercicio = cadena => cadena.length;//devuelve los caracteres de la cadena de texto
const segundoEjercicio = cadena => cadena.slice(0,4);//marca el inicio de lo que extraere de la cadena y el final
const tercerEjercicio = cadena => cadena.split(" ");//convierte el string en arreglo
const cuartoEjercicio = cadena => cadena.repeat(5);//Repite los textos

let condicion1 = (typeof texto1 === "string") ? primerEjercicio(texto1) : "No es una cadena de texto",
condicion2 = (typeof texto2 === "string") ? segundoEjercicio(texto2) : "No es una cadena de texto",
condicion3 = (typeof texto3 ===  "string") ? tercerEjercicio(texto3) : "No es una cadena de texto",
condicion4 = (typeof texto4 === "string") ? cuartoEjercicio(texto4) : "No es una cadena de texto";


console.log(condicion1);
console.log(condicion2);
console.log(condicion3);
console.log(condicion4);