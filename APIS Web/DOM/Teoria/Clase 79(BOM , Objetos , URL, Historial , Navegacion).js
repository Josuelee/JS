/*
Objeto URL mejor conocido como location 
     location.origin: La ruta donde se origina la pagina
     location.protocol: es el protocolo donde lo estamos invocando
     location.host: el host de la pag (nombre del dominio)
     location.hostname: solo el nombre del host
     location.port: puerto
     location.href: link de la pag
     location.hash: detectar el valor en una url que este  despues de un #
     location.pathname: el nombre del archivo de la pag
     location.search: almacena los parametros que se estan pasando por la url , despues de un ?
    
    location.reload(): hace que la pagina vuelva a cargar

Objeto history: 
    history.length: cuantas paginas eh visitado
    history.forward: lleva a una pag siguiente
    history.back: lleva a una pagina de antes
    history.go("recibe numeros negativos o positivos"): te envia a cualquier pagina sea antes o despues , los negativos son a paginas anteriores los positivos son a paginas despues

Objeto navegador (Navigator):
   navigator.connection: da informacion de nuestra conection
   navigator.geolocation: localizacion
   navigator.mediaDevices: dispositivos , camaras , microfonos
   navigator.mimeTypes: tipos de formatos que sorportan los navegadores webs
   navigator.onLine: detectar si el usuario pierde la conection y la vuelve a recuperar
   navigator.serviceWorker: nos ayuda a hacer progressiveWebApp
   navigator.storage:api de almacenamiento
   navigator.usb: detectar dispositivos usb
   navigator.userAgent: da informacion sobre el navegador que se conecta a nuestra aplicacion

 */

 
 const $btnLocation = document.getElementById("btnLocation"),
 $btnHistory = document.getElementById("btnHistory"),
 $btnNavigator = document.getElementById("btnNavigator")

 $btnLocation.addEventListener("click",()=>{
     console.clear()
     console.log(location)
     console.log(location.origin)
     console.log(location.protocol)
     console.log(location.host)
     console.log(location.hostname)
     console.log(location.port)
     console.log(location.href)
     console.log(location.hash)
     console.log(location.search)
     console.log(location.pathname)
 })


$btnHistory.addEventListener("click",()=>{
    console.clear()
    console.log(history)
    console.log(history.length)
    console.log(history.back())
    console.log(history.forward())
    console.log(history.go())
})

$btnNavigator.addEventListener("click" , ()=>{
    console.clear()
    console.log(navigator)
    console.log(navigator.connection)
    console.log(navigator.geolocation)
    console.log(navigator.mediaDevices)
    console.log(navigator.mimeTypes)
    console.log(navigator.onLine)
    console.log(navigator.serviceWorker)
    console.log(navigator.storage)
    console.log(navigator.usb)
    console.log(navigator.userAgent)
})