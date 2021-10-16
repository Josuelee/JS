const d = document,
w = window,
n = w.navigator;

export default function detectConection(){
  const isOnLine =()=>{
    const $div = d.createElement("div")
    d.body.prepend($div)
    if(n.onLine){
      $div.textContent = "Conexion reestablecida"
      $div.classList.add("online")
      $div.classList.remove("offline")
    }else{
      $div.textContent = "Conexion perdida"
      $div.classList.add("offline")
      $div.classList.remove("online")
    }

    setTimeout(()=> d.body.removeChild($div),2000)
  }

  w.addEventListener("online" , e=> isOnLine())
  w.addEventListener("offline" , e=> isOnLine())
}