/* 
Usar fetch con las funciones asincronas 
Recuerda que fetch esta compuesto por una promesa y las funciones asincronas funcionan solo con promesas

throw como un return pero va a mandarlo al catch, osea lanza el error al catch y ya no deja que se siga leyendo lo demas 
 */

export default function Clase108__FetchAsyncAwait(){
  
  const fetchConAsync = async ()=>{
    const $fetchAsync = document.getElementById("fetchAsync")
    const $fragment = document.createDocumentFragment()
    try{

      let res = await fetch("https://jsonplaceholder.typicode.com/users")
      
      let data = await res.json()
      
      if(!res.ok) throw {status: res.status , statusText: res.statusText}
      
      data.forEach(el=>{         
        const $li = document.createElement("li")       
        $li.innerHTML = `${el.name} --- ${el.phone}`
        $fragment.append($li)
      })


      $fetchAsync.prepend($fragment)


    }catch(err){
      let message = err.statusText || "Ocurrio un error al encontrar los datos"
      $fetchAsync.innerHTML = `${err.status} ${message}`    
    }


  }
  

  fetchConAsync()
}