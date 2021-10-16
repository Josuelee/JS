/* Los eventos permiten la interactividad es decir controlar las acciones que el usuario puede hacer , definir comportamientos del documento cuando se cumplan ciertas condiciones u ocurran otra tipo de cosas*/

/* existen 3 formas de declarar eventos 
    1-Como atributo
    2-Manejador semantico (solo permite un evento por elemento)
    3-Manejador multiple (permite muchos eventos en 1 solo elemento)*/
    
/*Las funciones que se ejecutan al ejecutar un evento se le llaman eventhandler o manejadores de eventos*/

console.group("Manejadores de eventos")

/* Forma de atributo "simplemente cree la funcion que se pondra en el atributo del elemento del html"*/
const eventoAtributo = ()=>{
    alert("Hola evento de forma Atributo")
        console.log(event)
}

/* Como manejador semantico (tambien se puede crear directamente la funcion en el evento , puede ser una funcion anonima osea una arrow function y se hace de la otra forma poniendo el nombre de la funcion , no se debe poner los parentesis)

La referencia del elemento html donde queremos poner el evento luego . el nombre del evento luego la funcion que definira que hara el evento

la funcion que se pase puede recibir solo 1 parametro y ese sera el del objeto event*/
const $eventManejadorSemantico = document.getElementById("manejadorSemantico")

$eventManejadorSemantico.onclick = (e)=>{
    alert("Hola evento manejador semantico")
    console.log(e.target)
    console.log(e.type)
} 


/* Como manejador multiple , Es similar al semantico la diferencia es que permite muchos eventos en 1 solo elemento , el segundo parametro recibe la funcion y el primer parametro es el nombre del evento */

const $eventManejadorMultiple = document.getElementById("manejadorMultiple")
function holaMultiple (){
    alert("Hola evento manejador multiple")
    console.log(event)
}
$eventManejadorMultiple.addEventListener("click" , holaMultiple )
$eventManejadorMultiple.addEventListener("click" , ()=>{
    alert("Hola evento manejador multiple 2 2 2 2 ")
} )


/* ejemplo de los 3 */

const mostrarAtributo = ()=>{
     alert("Mostrar atributo")
}

const $ingresar = document.getElementById("ms-event"),
$mostrar = document.getElementById("mm-event")

let nombre = "";

$ingresar.addEventListener("click" , ()=>{
    nombre = prompt("Ingrese su nombre")    
})

$mostrar.addEventListener("click" , ()=>{
    alert(`Su nombre es ${nombre}`)
    
}) 



console.groupEnd()