
/* Existen 2 formas de acceder a los atributos y data atributos , una es con getAttribute y
    la otra es con el punto y el nombre del atributo */

/* Al atributo/dataAtributo desde JS se puede obtener , eliminar , editar el valor  , agregar un valor 
    comprobar si existe el valor*/

/*Un atributo de tipo data nosotros los creamos , solo pones data-nombreQueQuieras, y la descripcion que quieras */

console.groupCollapsed("Atributos y data Attributes");
const linkDOM = document.querySelector(".link-dom")
console.log(document.querySelector(".link-dom"))
/* Obtener */
console.log(document.querySelector(".link-dom").getAttribute("href"))
console.log(document.querySelector(".link-dom").href)

/* Editar e insertar */
/* lo hice en una variable y en un forEach para que se le agregue a todos los href y no solo 1 */
linkDOM.setAttribute("href" , "https://jonmircha.com")//edite el valor que tenia el href
linkDOM.target = "_blank" //Cree el atributo target desde js aunque no estaba en mi html , con la notacion del punto
linkDOM.setAttribute("rel" , "noopener") //aca tambien lo cree pero con el setAttribute 
linkDOM.dataset.id= "idUnico"//cree un data set desde la notacion del punto
/* Eliminar */

linkDOM.removeAttribute("data-id" , "idUnico")
linkDOM.removeAttribute("target" , "_blank")

/* Comprobar si existe */

console.log(linkDOM.hasAttribute("rel"))
console.log(linkDOM.hasAttribute("target"))

/* Data-atribute */

linkDOM.dataset.peterAmigo = "peterAmigo"
linkDOM.dataset.loMejor = "loMejorEsLaComida"

console.log(linkDOM.dataset.loMejor)
console.log(linkDOM.getAttribute("data-peter-amigo"))

linkDOM.setAttribute("data-peter-amigo" , "moped")
console.log(linkDOM.dataset.peterAmigo)

linkDOM.removeAttribute("data-lo-mejor")
console.log(linkDOM.getAttribute("data-lo-mejor"))

console.log(linkDOM.hasAttribute("data-lo-mejor"))

/* Estoy agregandole estas propiedades todos los selectores que tengan la clase .link-dom */
document.querySelectorAll(".link-dom").forEach(el=>el.setAttribute("target" , "_blank"))
document.querySelectorAll(".link-dom").forEach(el=>el.dataset.prueba = "prueba")
document.querySelectorAll(".link-dom").forEach(el=>el.setAttribute("rel" , "noopener"))





console.groupEnd()



