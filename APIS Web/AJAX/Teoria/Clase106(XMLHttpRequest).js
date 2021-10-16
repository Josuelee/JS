/*
 Para consumir una appi externa o interna con el objeto XMLHttpRequest se necesitan 4 pasos:
  1. Instanciar el objeto /crearlo 
  2. Agregarle un evento  (cualquier evento especial para XMLHttpRequest)
  3. Usar el metodo open("GET" , "http//Hola.com") recibe 2 parametros , el primero es el tipo de metodo que se enviara y el segundo la URL
  4. enviar el objeto con el metodo send() que no importa si viene con datos o vacio
  
  -el evento readystatechange: se lanza cada vez que la propiedad readyState cambia , por eso es que cuando imprimimos el objeto xhr dentro del evento se imprime 4 veces porque el estado cambia de 1 a 4

  -solo los estados 200 que son los que la respuesta es correcta , si quieres saber mas de estados de respuesta esta en la documentacion https://developer.mozilla.org/es/docs/Web/HTTP/Status

  -metodos y eventos del objeto xhr https://lenguajejs.com/javascript/peticiones-http/xhr/
 */

export default function Clase106_XMLHttpRequest(){
const $xhrList = document.getElementById("listXHR")
const $fragment = document.createDocumentFragment()

const xhr = new XMLHttpRequest()

xhr.addEventListener("readystatechange" , ()=>{
  if(xhr.readyState !== 4) return;  

  if((xhr.status > 199) && (xhr.status < 300)){ 

    const apiData = JSON.parse(xhr.responseText)//convierto texto a objetos JS

    apiData.forEach(data=>{

      const $li = document.createElement("li")    

      $li.innerHTML = `  ${data.name} ---  ${data.phone} ---   ${data.email} `

      $fragment.prepend($li)      

    })
    $xhrList.prepend($fragment)    

  }else{
    let status = xhr.statusText || "Error Not Found"
    $xhrList.innerHTML = `${xhr.status}: ${status}`
  }
})

xhr.open("GET",  "https://jsonplaceholder.typicode.com/users")

xhr.send()
}