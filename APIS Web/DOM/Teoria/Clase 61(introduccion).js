console.groupCollapsed("Introduccion al DOM")

/* Muestra en consola todos estos elementos */
console.log(document)
console.log(document.documentElement)//muestra el html
console.log(document.head)
console.log(document.body)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
 setTimeout(()=>{
    console.log(document.getSelection().toString())//Muestra en cadena de texto lo que hemos seleccionado en el html
},3000) 

console.groupEnd()

/* Coleccion de elementos html no es lo mismo que un arreglo , solo comparten el metodo forEach */