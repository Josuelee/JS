/* 
  API FETCH: Es la forma moderna con la cual se trabaja AJAX y es basada en promesas, en su interior trabaja el objeto XMLHttpRequest pero tiene funcionalidades mas simples y mejores


  -Se ejecuta el objeto fetch("" ,{}) recibe 2 parametros ,el primero es la URL de la api a consumir el segundo es opcional pero es un objeto con una serie de propiedades

  -el body es una propiedad que viene en la respuesta de Fetch , y trae un ReadableStream, si quieres saber mas de este objeto ve a
   https://developer.mozilla.org/en-US/docs/Web/API/Streams_API#concepts_and_usage
   https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams

  -body tiene metodos que son:  "Estos metodos se agregan directamente a la respueta de Fetch , no reciben parametros"
  json()- Convierte cualquier formato JSON a objetos JavaScript
  text()- Convierte formato JSON a texto
  blon()- Permite usar archivos que no son texto como las imagenes videos etc en JS 

  la forma de convertir es 
    respuesta.json()
    respuesta.text()
    respuesta.blob()

  -ok es como el readyState de XMLHttpRequest pero en fetch , true si los datos se trayeron correctamente , false si no
 */

export default function Clase107_APIFetch(){      
  const $fetch = document.getElementById("listFetch")
  fetch("https://jsonplaceholder.typicode.com/users")  
  .then(response => response.ok ? response.json() : Promise.reject(response))
  .then(json=>{                
    const $fragment = document.createDocumentFragment()
    json.forEach(element=>{
      const $li = document.createElement("li")
      $li.innerHTML = `${element.name} --- ${element.email}`
      $fragment.append($li)
    })
    $fetch.prepend($fragment)      
  })
  .catch(err=> {
    let message = err.statusText || "Ocurrio un error al encontrar los datos"
    $fetch.innerHTML = `${err.status} ${message}`    
  })
  .finally(()=>"") //console.log("El finally se ejecutara independientemente si trae el then o el cathc"))
}













