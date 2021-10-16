const d = document;
export function responsiveSlider(sliderItem){  
  const $sliderItem = d.querySelectorAll(sliderItem)
  let contador = 0;

  const sliderAdelante = ()=>{  
  
    contador++
    $sliderItem[contador-1].classList.remove("slider__item--active")                  
    if(contador === $sliderItem.length){
      contador = 0;
    }
    $sliderItem[contador].classList.add("slider__item--active")                                                   
  }  
  const sliderAtras = ()=>{  
    contador--
    $sliderItem[contador+1].classList.remove("slider__item--active")      
    if(contador<0){
      contador = $sliderItem.length-1
    }
    $sliderItem[contador].classList.add("slider__item--active")
  }  
    
  setInterval(()=>sliderAdelante(), 10000)

  d.addEventListener("click" , e=>{
    if(e.target.matches(".buttonSlider__item--right")){      
      sliderAdelante();
    }
    if(e.target.matches(".buttonSlider__item--left")){
      sliderAtras()  
    }
  })
}