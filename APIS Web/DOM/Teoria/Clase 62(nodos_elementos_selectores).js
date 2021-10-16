/* Todo en el documento html es un NODO */

/* Hay varios tipos de Nodos: 
    1-Nodo de elementos : (Cualquier Etiqueta HTMl)
    3-Nodo de texto : (Es el texto que esta dentro de la etiqueta)
    4-Nodo comentario: (Es un comentario de HTMl)*/

    /* Obtener los selectores */
console.groupCollapsed("Nodos elementos y selectores")
    console.log(document.getElementsByTagName("a"))
    console.log(document.getElementsByClassName("images"))
    console.log(document.getElementsByName("nombre"))
    /* Estos 3 de arriba ya no se utilizan fueron reemplazaros por queryselector */

    /* Cuando utilizo querySelector debo escribir dentro de los parentesis como un selector de css un . una clase , # id , nombre etiqueta ,etc 
        se puede conseguir un nodo tipo ID con query selector pero se usa mas getElementById porque es mas rapido*/
    console.log(document.getElementById("menu"))    
    console.log(document.querySelector(".images"))
    console.log(document.querySelectorAll("li"))
    console.log(document.querySelector("p"));
    document.querySelectorAll(".images").forEach(el=> console.log(el))

console.groupEnd()



