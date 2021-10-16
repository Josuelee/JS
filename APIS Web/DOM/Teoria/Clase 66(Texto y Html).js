/* Para modificar el texto de html atraves de JS se utilizan 3 metodos:

    -textContent : modifica solo el texto

    -innerHTML: modifica el texto y si hay etiquetas html se ejecutan en el mismo html , osea si pongo <bold>Hola</bold> , ese Hola se va a poner en negrita , osea se ejecutara , pero si yo pusiera ese bold en textContent , se escribiria por encima y no se ejecutaria

    -outerHTML: Reemplaza la etiqueta en la que se esta ejecutando por una nueva  , por ejemplo , estoy accediendo a un p con un id , y ese p tiene texto , si yo utilizo outerHTML y en ves de p agrego un div , esa etiqueta P sera cambiada por el div 
    
    y la etiqueta no estandar que fue creada para internet Explore es innerText que hace lo mismo que textContent*/

console.group("Texto HTML ")
    document.getElementById("que-es").textContent = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
    --textContent
    `    

    document.getElementById("que-es2").innerHTML = `
    <p>El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.</p>
    <p>Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.</p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark> ---innerHTML
    </p>`

    document.getElementById("que-es3").outerHTML = `<div id= "que-es3"> <p class="prueba">El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.---outerHTML</p>
    </div>`



console.groupEnd()