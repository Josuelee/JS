console.log(`
----Ejercicio con validaciones de texto--------`);

const primerEjercicio = (cadena = "") =>
    (!cadena)
        ? console.warn("Tienes que ingresar una cadena de texto - Primer Ejercicio")
        : console.log(cadena.length);
    
primerEjercicio("");

const segundoEjercicio = (cadena = "",posicion = undefined) =>
    (!cadena)
        ? console.warn("Tiene que ingresar un texto-Segundo Ejercicio")
        : (!posicion) 
            ? console.warn("Tiene que ingresar una posicion-Segundo Ejercicio")
            : console.log(cadena.slice(0 , posicion));

 segundoEjercicio();

 const tercerEjercicio = (cadena = "" , separador = "") =>
    (!cadena)
        ? console.warn("Tiene que ingresar una cadena de texto")
        : (!separador)
            ? console.warn("Tiene que ingresar un separador")
            : console.log(cadena.split(" "));
tercerEjercicio("holaa" , "");

const cuartoEjercicio = (cadena = "" , cantidad = undefined) => {

   if(!cadena) return console.warn("Tiene que ingresar un texto")

   if(cantidad === undefined) return console.warn("Tiene que ingresar una cantidad")

   if(cantidad === 0) return console.error("no pueden haber 0 cantidades de veces que se repetira") 

   if(Math.sign(cantidad) === -1) return console.error("No puedes ingresar un numero negativo");

   for(let x = 1; x<=cantidad; x++){
        console.log(`${cadena} = ${x}`)   
   }
}

cuartoEjercicio("Hola" , 10);