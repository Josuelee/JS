console.group("Creando Elementos y Fragmentos")
    /* Creando una imagen en el section */
    /* $figure = document.createElement("figure")*/
    $img = document.createElement("img")
    $figcaption = document.createElement("figcaption")
    $figcaptionText = document.createTextNode("Tecnolgies")   
    $section = document.querySelector(".images")


    $figure.appendChild($img)
    $figure.appendChild($figcaption)
    $figcaption.appendChild($figcaptionText)
    

    $img.setAttribute("src" , "https://placeimg.com/300/300/tech")
    $img.setAttribute("alt" , "Tech")
    $figure.classList = "image"
    $section.appendChild($figure) 

    /* Creando otra imagen en el section */
    

     $figure2 = document.createElement("figure")
    $img2 = document.createElement("img")
    $figcaption = document.createElement("figcaption")
    
    $figure2.classList = "image"

    $figure2.innerHTML = `
    <img src = "https://placeimg.com/300/300/people">
    <figcaption>Peoplees</figcaption>
    `;

    $section.appendChild($figure2) 
    
    /* Creando 3 imagenes dinamicamente*/

     const content = ["https://placeimg.com/300/300/arch", "https://placeimg.com/300/300/nature", "https://placeimg.com/300/300/animals"] 

    
    
    /*Si no creara las variables dentro del forEach , sucederia que primero crea un elemento img y luego en la primera vuelta del forEach a esa imagen que se creo anteriormente le daria el primer valor del arreglo al src , pero en la segunda vuelta , reemplazaria el valor de la primera casilla del arreglo por la segunda casilla y en la segunda vuelta sucede lo mismo , y se quedaria con 1 sola imagen y el valor la tercera casilla del arreglo 
    
    pero si yo dentro del forEach creo las variables ,la primera vuelta se crea una imagen , la segunda se crea otra y asi hasta tener imagenes del tamaño del arreglo*/

    
    

    content.forEach(el=>{
        const $figure3 = document.createElement("figure"),
        $img3 = document.createElement("img") ,
        $figcaption3 = document.createElement("figcaption")
        
        $img3.setAttribute("src", el)
        $figcaption3.textContent = "Creados por JS en un ciclo"   
        
        $figure3.appendChild($img3)
        $figure3.appendChild($figcaption3)
        $figure3.classList = "image"    
        $section.appendChild($figure3)
    })

   /* La mejor forma es creando los elementos por un fragmento del DOM */

    const videoJuegos = ["TheLastOfFast" , "Uncharted" , "MaskEffect" , "CyberPunk 2077" , "GTAV"]


   const $ul = document.createElement("ul")

    document.write("VideoJuegos")

    videoJuegos.forEach($el =>{
        const $li = document.createElement("li")
        $li.textContent = $el
        $ul.appendChild($li)
    })
    const $fragmento = document.createDocumentFragment()
   $fragmento.appendChild($ul)

   document.body.appendChild($fragmento)
   

    /* Insertando con el innerHTML  */
   document.write("Continentes")
    const continentes = ["america","africa","oceania", "europa" , "asia"]

    const $ul2 = document.createElement("ul")

    continentes.forEach(el=>$ul2.innerHTML +=`<
    li>${el}</li>`)

    document.body.appendChild($ul2) 




   


    
    

    


console.groupEnd()