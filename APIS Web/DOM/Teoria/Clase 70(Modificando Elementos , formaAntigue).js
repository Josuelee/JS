/* La forma antigua de poder modificar los elementos del DOM
    replaceChild("nuevoElemento" , "antiguoElemento")
    insetBefore("nuevoElemento" , "elementoDeReferencia")
    removeChild("ElementoARemover")
    cloneNode(boolean) - abajo la definicion

    -y tambien se pueden copiar los elementos con : elementoACopiar.cloneNode(boolean) , si ponemos true copiara todo lo que hay dentro del elemento , si ponemos false solo copiara la etiqueta en si , osea el elemento padre

*/
console.group("Modificando Elementos (Forma antigua)")
const $imagess = document.querySelector(".images"),
$newImages = document.createElement("figure")
$newImages.innerHTML = `
    <img src = "https://placeimg.com/300/300/any" alt = "any">
    <figcaption>Any</figcaption>
`
const $clone = $imagess.cloneNode(true)

$newImages.classList.add("image")

 $images.replaceChild($newImages ,  $images.children[2])
$images.insertBefore($newImages , $imagess.firstElementChild)
$images.removeChild($imagess.lastElementChild)

 document.querySelector("body").appendChild($clone) 




console.groupEnd()