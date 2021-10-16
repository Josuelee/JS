const $d = document  
export function digitalClock(clock , btnStart, btnStop){
  let interval = undefined;

  $d.addEventListener("click" , (e)=>{
    if(e.target.matches(btnStart)){
      interval = setInterval(()=>{
        let time = new Date().toLocaleTimeString()
        $d.querySelector(clock).innerHTML = `<h3>${time}</h3>`
      },1000)

      $d.querySelector(btnStart).disabled = true;
      $d.querySelector(btnStart).classList.add("button__item--disabled")
    }
    if(e.target.matches(btnStop)){
      $d.querySelector(clock).innerHTML = null
      clearInterval(interval)
      $d.querySelector(btnStart).disabled = false;
      $d.querySelector(btnStart).classList.remove("button__item--disabled")
    }
  })
}

export function alarmaDespertadora(sonido , btnStart, btnStop){  
  let timeOut = undefined
  const $alarma = $d.createElement("audio")
  $alarma.src = sonido

  $d.addEventListener("click" , (e)=>{
    if(e.target.matches(btnStart)){
      timeOut = setTimeout(()=>{
        $alarma.play() //este metodo play ejecuta la etiqueta audio, es de la API de audio en JS
      } , 500)      
      $d.querySelector(btnStart).disabled = true;
      $d.querySelector(btnStart).classList.add("button__item--disabled")
    }

    if(e.target.matches(btnStop)){
      $alarma.pause()//metodo para pausar la alarma , se pausa y luego con currentTime regreso al inicio
      $alarma.currentTime = 0; //si no pusiera esta propiedad cuando le de click , seguiria reproduciendose donde se quedo
      clearTimeout(timeOut)
      $d.querySelector(btnStart).classList.remove("button__item--disabled")
      $d.querySelector(btnStart).disabled = false
    }
  })
}