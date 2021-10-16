/* La forma en que se recorre el DOM (En este caso solo los elementos) , es con comandos y esos son:

.children = "Selecciona todos los hijos" , tambien puede seleccionar a un hijo directo con [0], dentro de los corchetes la posicion del hijo que quiero seleccionar

.parentElement = "Selecciona al padre directo"

.firstElementChildren = "Selecciona al primer hijo"

.lastElementChildren = "Selecciona al ultimo hijo"

.nextElementSibling = "Selecciona al hermano que esta abajo (siguiente)"

.previousElementSibling = "Selecciona al hermano que esta arriba (antes)"

childElementCount  = "Cuenta cuantos hijos tiene el elemento"

closest() = "metodo que recibe un parametro del ancestro mas cercano , osea del padre o abuelo , y si no existe ese ancestro devolvera null"*/
console.groupCollapsed("DOM Traversing: Recorriendo el DOM")
    console.log(document.querySelector(".images").children)

    console.log(document.querySelector(".images").children[2])

    console.log(document.querySelector(".images").parentElement)

    console.log(document.querySelector(".image").parentElement)

    console.log(document.querySelector(".images").previousElementSibling)

    console.log(document.querySelector(".images").nextElementSibling)

    console.log(document.querySelector(".images").childElementCount)

    console.log(document.body.childElementCount)

    console.log(document.querySelector(".images").firstElementChild)

    console.log(document.querySelector(".images").lastElementChild)

    console.log(document.querySelector(".images").children[2].closest("section"))


console.groupEnd()