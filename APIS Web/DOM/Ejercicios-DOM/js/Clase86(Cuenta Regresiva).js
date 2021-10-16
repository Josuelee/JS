const d= document;
  let total = 0;
  
export const cuentaRegresiva = (mensaje , audio) =>{            
  let cuentaRegresiva =setInterval(()=>{
    let fechaLimite = new Date(2021,3,28 ).getTime()
    let fechaNow = new Date().getTime()
    total = fechaLimite - fechaNow 

    let dias = total / (1000*60*60*24),
    horas = total % (1000*60*60*24) / (1000*60*60) ,
    minutos = total % (1000*60*60) / (1000*60),
    segundos = total % (1000*60) / (1000)    

    d.getElementById("days").innerHTML = Math.floor(dias)

    d.getElementById("hours").innerHTML = ("0" + Math.floor(horas)).slice(-2)

    d.getElementById("minutes").innerHTML = ("0"+Math.floor(minutos)).slice(-2)

    d.getElementById("seconds").innerHTML = ( "0" + Math.floor(segundos)).slice(-2)
    
    if (total < 0){
      const $audio = d.createElement("audio")
      $audio.src = audio
      $audio.play()
      clearInterval(cuentaRegresiva);      
      d.getElementById("section3").removeChild(d.getElementById("cuentaRegresiva"))
      d.getElementById("section3").innerHTML = `<h3 class="cumple">${mensaje}</h3>`
      
    }
  }, 1000)   
  
  
}