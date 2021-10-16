export default function sorteoDigital (list , btn){
  const winnerList =(lista)=>{
    const $list = document.querySelectorAll(lista)  
    
    let random = Math.floor(Math.random() * $list.length),

    winner = $list[random]

    console.log(winner.textContent)
    return `El ganador es ${winner.textContent}`
  
  }

  document.addEventListener("click" , (e)=>{
    if(e.target.matches(btn)) alert(winnerList(list));
  
  })

  
  
  
}