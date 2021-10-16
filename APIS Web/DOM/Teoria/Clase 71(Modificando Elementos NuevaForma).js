/* Metodos para insertar nodos en HTML (forma moderna)

    insertAdjacentElement(posicion , elementoInsertar)
    insertAdjacentHTML(posicion, "codigoHtml")
    insertAdjacentText(posicion, "texto")

    Posiciones: 
    beforebegin-hermanoAnterior
    afterbegin-primerhijo
    beforend-ultimohijo
    afterend-hermanoSiguiente

    Nuevos Metodos para insertar nodos (otra forma moderna que antes estaba en Jquery)

    prepend - primer hijo
    append - ultimo hijo
    before - hermano anterior
    after - hermano siguiente
*/
const $images71 = document.querySelector(".images"),
$newImage = document.createElement("figure")

$newImage.insertAdjacentHTML("afterbegin" , `
    <img src = "https://placeimg.com/300/300/any" alt = "any">
    <figcaption></figcaption>    
`)
$newImage.querySelector("figcaption").insertAdjacentText("afterbegin" , "Anyweyyy")
$newImage.classList.add("image")
$images71.insertAdjacentElement("beforebegin" , $newImage)
$images71.insertAdjacentElement("beforeend" , $newImage)
$images71.insertAdjacentElement("afterbegin" , $newImage)
$images71.insertAdjacentElement("afterend" , $newImage) 

$images71.prepend($newImage)
$images71.append($newImage)
$images71.before($newImage)
$images71.after($newImage) 






