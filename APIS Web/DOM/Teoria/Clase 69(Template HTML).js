/* El template html es una etiqueta que no se renderiza en el documento (Puede ayudarnos a trabajar con el dom de manera mas    eficiente) 

El template es un modelo a seguir, como asi , la estructura de etiquetas que lleve adentro es la que yo clonare para luego esa misma estructura de etiquetas ya clonadas agregarsela al dom , por ejemplo:

<template>
    <tr>
     <td></td>
    </tr>
</template>

La estructura es una columna y una fila para una tabla , entonces , ahora a partir de ese modelo a seguir yo puedo generar tantas columnas y filas clonando esa estructura dentro del Template
*/

/* Otro ejemplo:
    <template>
     <figure>
      <img>
      <figcaption></figcaption>
     </figure>     
    </template>

    Ahora ya que dentro del template esta la etiqueta figure con su estructura , ahora ese figure con img y figcaption podre copiar esa estructura y agregarla al dom las veces que quiera 
 */

 /* La forma en que se clona es con document.importNode()
 importNode("Nodo que queremos copiar" , "true/false") , recibe 2 parametros, el nodo que queremos copiar en este caso template y el segundo es un boolean , si en ese boolean ponemos true , clonara todo el contenido de el nodo en este caso , <template><img><figcaption></figcaption></template> , eso es lo que clonara , pero si ponemos false , solo clonara la etiqueta padre , en este caso <template></template>
  */

const $images = document.querySelector(".images"),
$template = document.getElementById("template-container").content;
const $fragment = document.createDocumentFragment(),
$imagesContent = [
    {
        title: "Tecnologia",
        img:"https://placeimg.com/300/300/tech"
    },
    {
        title: "Personas",
        img: "https://placeimg.com/300/300/people"
    },
    {
        title: "Animales",
        img: "https://placeimg.com/300/300/animals"
    },
    {
        title: "Naturaleza" ,
        img: "https://placeimg.com/300/300/nature"
    }
]

$imagesContent.forEach(el=>{
    $template.querySelector("img").src = el.img
    $template.querySelector("img").alt = el.title
    $template.querySelector("figcaption").textContent = el.title
   const clone = document.importNode($template , true);
   $fragment.appendChild(clone)
});

$images.appendChild($fragment)

