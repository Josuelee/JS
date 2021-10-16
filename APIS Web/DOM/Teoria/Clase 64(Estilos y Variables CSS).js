console.groupCollapsed("Estilos y Variables CSS")

    $linkDOM = document.querySelector(".link-dom")
    $listDOM = document.querySelectorAll(".list-dom ")
    
    /* Poniendole estilo al link */
    $linkDOM.style.display = "block"
    $linkDOM.style.setProperty("padding" , "1rem")    
    $linkDOM.style.marginTop = "10px"
    $linkDOM.style.width = "50%"    
    $linkDOM.style.textAlign = " center"
    $linkDOM.style.marginLeft = "auto"
    $linkDOM.style.marginRight = "auto"
    
    /*  Poniendole estilos a las listas (todas por eso forEach)  */
    document.querySelectorAll(".list-dom a").forEach($el=> $el.style.color = "#F7D71E")    
    $listDOM.forEach($el=>$el.style.setProperty("list-style" ,"none"))
    $listDOM.forEach($el=>$el.style.backgroundColor = "#222")
    $listDOM.forEach($el=>$el.style.display ="block")
    $listDOM.forEach($el=>$el.style.width = "50%")
    $listDOM.forEach($el=> $el.style.textAlign= "center")
    $listDOM.forEach($el=> $el.style.marginLeft= "auto")
    $listDOM.forEach($el=> $el.style.marginRight= "auto")
    document.querySelectorAll(".list-dom a").forEach($el=>$el.style.textDecoration = "none")
    $listDOM.forEach($el => $el.style.setProperty   ("font-family" , "sans-serif"))
   

    console.log(getComputedStyle($linkDOM).getPropertyValue("margin"))
    
    // mostrar estilos con la propiedad style del dom y del windows , con el getComputedStyle y getPropertyValue
    
    console.log(document.querySelector(".list-dom").style)
    console.log(getComputedStyle($linkDOM)) 
    

        
    console.log(getComputedStyle($linkDOM).getPropertyValue("display"))

    console.log(getComputedStyle(document.querySelector(".list-dom")).getPropertyValue("text-decoration"))
        

    /* esto de las variables css lo comente no porque no sea importante sino para que el estilo no afecte en futuras clases */

    /* Variables CSS    
        el valor de la variable CSS se obtiene con getComputedStyle(documento html) y luego getPropertyValue("nombre de la variable css")*/
    
    
    
        
        $html = document.documentElement
        $body = document.body
    console.log(getComputedStyle($linkDOM).getPropertyValue("--colorFondo"))
    
    console.log(getComputedStyle($html).getPropertyValue("--VariablePrueba"))

/*     let $yellowJS = getComputedStyle($html).getPropertyValue("--colorJS");
    let $black = getComputedStyle($html).getPropertyValue("--colorFondo") */

    /* $body.style.setProperty("color" , $yellowJS)
    $body.style.backgroundColor = $black  */
    
    //Modificar el valor de la variable CSS desde JS 

    /* $html.style.setProperty("--colorFondo" , "#000") //aca modifique el valor con setProperty (le puse el set property al html porque ahi se almacena el root) */

/*     $black= getComputedStyle($html).getPropertyValue("--colorFondo")//ahora solo actualize el valor de la variable 

    $body.style.backgroundColor = $black    //y se lo agregue de nuevo al body */ 
    
    
console.groupEnd("")





