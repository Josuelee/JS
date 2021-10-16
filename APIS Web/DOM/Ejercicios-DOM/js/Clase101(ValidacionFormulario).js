export default function form_validator(){  
  const $texts = document.querySelectorAll(".formValidator [required]") 
  const $form = document.getElementById("validatorForm") 
  
  $texts.forEach(input=>{        
    const $span = document.createElement("span")    
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add("formValidator__error", "formValidator__none")    
    input.insertAdjacentElement("afterend" , $span)
  })

  document.addEventListener("keyup" , e=>{    
    if(e.target.matches(".formValidator [required]")){
      const $inputTarget = e.target
      const pattern = $inputTarget.pattern || $inputTarget.dataset.pattern
      
      if(pattern && $inputTarget.value !== ""){
        const regExp = new RegExp(pattern , "ig")        
        return !regExp.exec($inputTarget.value)
          ?document.getElementById($inputTarget.name).classList.add("formValidator__isActive")
          :document.getElementById($inputTarget.name).classList.remove("formValidator__isActive")
        }

      if(!pattern){
        return $inputTarget.value == ""
          ?document.getElementById($inputTarget.name).classList.add("formValidator__isActive")
          :document.getElementById($inputTarget.name).classList.remove("formValidator__isActive") 
      }
    }
  })

  document.addEventListener("submit" , (e)=>{    
    e.preventDefault()
      const $svg = document.getElementById("svg"),
      $respuesta = document.getElementById("respuesta") 
           
      $svg.classList.remove("formValidator__none")
      $respuesta.classList.add("formValidator__none")        
      setTimeout(()=> {
          $svg.classList.add("formValidator__none")
          $respuesta.classList.remove("formValidator__none")
          $form.reset()
          setTimeout(()=> $respuesta.classList.add("formValidator__none") , 3000)


      }, 3000) 
  })
  


}