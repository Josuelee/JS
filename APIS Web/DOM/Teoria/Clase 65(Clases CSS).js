/* La forma en la que se trabaja con las clases es con 
classList */

/* Metodos: 
    *add - agrega
    *remove- borra
    *toggle - hace las 2 , si ya existe la clase la elimina, y si no existe la agrega 
    *replace - reemplaza el antiguo valor de la clase y le agrega uno nuevo recibe 2 parametros ("nameClase antigua") ("nameClaseNueva")
    *contains - verifica si la clase existe o no
 */
console.groupCollapsed("Clases CSS")
    console.log(document.querySelector(".images").classList)//Devuelve un objeto tipo DOMTokenList con el valor , el length etd
    console.log(document.querySelector(".images").className) //devuelv solo el valor de la clase

    document.querySelector(".images").classList.add("rotate--45" , "opacity" , "sepia")

    console.log(document.querySelector(".images").classList.contains("rotate--45"))

    
    document.querySelector(".images").classList.toggle("opacity")
    
    console.log(document.querySelector(".images").classList.contains("opacity"))

    document.querySelector(".images").classList.remove("sepia")
    
    console.log(document.querySelector(".images").classList)
    
    document.querySelector(".images").classList.replace("rotate--45" , "rotate--135")
    
    console.log(document.querySelector(".images").classList)
    
    document.querySelectorAll(".images").forEach($el=> $el.classList.add("rotate--45" , "opacity"))
    
    document.querySelectorAll(".images").forEach($el=> $el.classList.remove("opacity" , "rotate--45" , "rotate--135" , "sepia") )

    


    console.groupEnd()