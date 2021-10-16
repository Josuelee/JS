/*Axios crea automaticamente un objeto en el error llamado response */
/* Axios automaticamente detecta un error y lo manda al catch , y al parametro del catch , osea el error le crea automaticamente un objeto llamad response*/

const $axios = document.getElementById("axios"),
$fragment = document.createDocumentFragment()

export default function Clase109_Axios(){
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    
    res.data.forEach(el=>{      
      const $li  = document.createElement("li")
      $li.textContent = `${el.name} -- ${el.phone}`
      $fragment.append($li)
    })
    $axios.append($fragment)
  })
  .catch(err=> {
     let message = err.response.statusText || "Ocurrio un error al encontrar los datos"
    $axios.innerHTML = `${err.response.status} ${message}`     
    
  })
  .finally()
}



  