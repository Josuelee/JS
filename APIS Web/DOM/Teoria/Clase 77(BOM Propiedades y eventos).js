/* BOM , browser object model , representa el navegador en si , podria ser una pestaña etc

manejar eventos , metodos , funciones etc del objeto global window

    Eventos del window: 

    -evento resize: se ejecuta cuando movemos la pantalla osea la hacemos grande o pequeña
    -evento scroll: cuando movemos el scroll del navegador se ejecutara
    -evento load: se ejecuta cuando se recarga el navegador
    
    DOMContentLoaded vs load:
    -los dos son eventos que se ejecutan cuando carga la pagina , sin embargo , 
        DOMContentLoaded es un evento del document se ejecutara al momento de cargar el html y
        load es un evento del window que se ejecutara cuando termine de cargarse todo el html y las imagenes etc por eso es mas lento
    -En buenas practicas a la hora de ejecutar un evento cuando se cargue una pagina por rapidez es mejor DOMContentLoader

    
    Propiedades:
    -window.innerHeight: mostrara el alto del viewport de la ventana , osea no tomara en cuenta el menu etc
    -window.innerWidth: mostrara el ancho del viewport
    -window.outerHeight: mostrara el alto de la ventana del navegador contando el menu y las pestañas
    -window.outerWidth: mostrara el ancho de la ventana del navegador


    -window.scrollY: cuando hacemos scroll en el ejeY
    -window.scrollX: cuando hacemos scroll en el ejeX

    -window.screenY: indicara en que cordenada de la pantalla de la compu esta iniciando el alto de la pagina en la pantalla
    (arriba a abajo)
    -window.screenx: indicara en que cordenada de la pantalla de la compu esta iniciando el ancho de la pagina en la pantalla
    (izquierda a derecha)
    



*/

window.addEventListener("resize" , ()=>{
    console.clear()
    console.log("resize")    
    console.log(window.innerHeight , 'altoViewport')    
    console.log(window.innerWidth , 'anchoViewport')
    console.log(window.outerHeight , 'altoPantalla')
    console.log(window.outerWidth , 'anchoPantalla')
})

window.addEventListener("scroll" , ()=>{
    console.clear()
    console.log("scroll")
    console.log(Math.round(window.scrollY))
    console.log(Math.round(window.scrollX))
    
})

window.addEventListener("load" ,(e)=>{
    console.log("screen con load")
    console.log(window.screenY , 'alto')    
    console.log(window.screenX , 'ancho')
    console.log(e)
})

window.addEventListener("DOMContentLoaded" , (e)=>{
    console.log("screen con DomContentLoaded")
    console.log(window.screenY)
    console.log(window.screenX)
    console.log(e)
})




