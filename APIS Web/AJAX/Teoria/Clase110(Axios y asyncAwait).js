/*Axios crea automaticamente un objeto en el error llamado response */
/* Axios automaticamente detecta un error y lo manda al catch , y al parametro del catch , osea el error le crea automaticamente un objeto llamad response*/

export default function Clase110__AxiosYAsyncAwait(){
  const $axiosAsync = document.getElementById("axiosAsync"),
   $fragment = document.createDocumentFragment()

   const axiosAsync = async()=>{
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users")                    
      res.data.forEach(el=>{
        const $li = document.createElement("li")
        $li.innerHTML = `${el.name} -- ${el.phone}`
        $fragment.append($li)        
        
      })
        $axiosAsync.append($fragment)
    } catch (err) {
      let message = err.response.statusText || "Ocurrio un error al encontrar los datos"
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`
    }finally{
      
    }
   }

   axiosAsync()
}