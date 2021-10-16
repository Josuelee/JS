console.groupCollapsed(`MetodoFilter`);

const arreglo = [
    {nombre: "Josue" ,edad: 20},
    {nombre: "Jonathan" ,edad: 10},
    {nombre: "Lisa" ,edad: 18},
    {nombre: "jenifer" ,edad: 14}       
];
let mayoresDeEdad = arreglo.filter(edad=> edad.edad >=18)
let menoresDeEdad = arreglo.filter(edad=> edad.edad <18)
console.info(...mayoresDeEdad);
console.info(...menoresDeEdad);

//promedio de las edades de los menores de edad
const menoresDeEdadCantidades = menoresDeEdad.map(x=> x.edad);
let sumarMenores =0;
for(let datos of menoresDeEdadCantidades){
    sumarMenores =+ datos;
}
console.log(`El promedio de las edades de los menores de edad es ${sumarMenores/menoresDeEdadCantidades.length}`)

//Promedio de las edades de mayores de edad

const mayoresDeEdadCantidad = mayoresDeEdad.map(x=> x.edad)
let sumarMayores = 0;
for(let dato of mayoresDeEdadCantidad){
    sumarMayores += dato;
}
console.log(`el promedio de las edades de los mayores de edad ${sumarMayores/mayoresDeEdadCantidad.length}`)

console.groupEnd();

console.groupCollapsed(`Metodo Map`);
//sacarle el promedio al cuadrado de todos los numeros dentro del arreglo
const arreglo2 = [1,2,3,4,5,6,7,8,9,10];
const cuadrado = arreglo2.map(x => Math.pow(x,2));
let acumular = 0;
for(let datos of cuadrado){
    acumular += datos;
}
let promedio  = acumular/ arreglo2.length
console.log(cuadrado);
console.log(promedio);
console.groupEnd();

const arregloRepetido = [1,1,2,23,4,4,5,7];
const arregloSinRepetirse = ([...new Set(arregloRepetido)])



console.log(`Arreglo original : ${arregloRepetido}\nArreglo sin repeticiones: ${arregloSinRepetirse}`)







