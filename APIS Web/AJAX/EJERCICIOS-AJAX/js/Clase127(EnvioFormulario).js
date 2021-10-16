const d = document,
$form = d.getElementById('form'),
$formElements = d.querySelectorAll('[required]'),
$labels = d.querySelectorAll('.form__container'),
$loader = d.getElementById('loader'),
$resText= d.getElementById('res-text')

d.addEventListener('keyup' , e=>{
  $formElements.forEach(formElement=>{  
    if(formElement === e.target){      
      const text = formElement.pattern || formElement.dataset.pattern;                  

        if(new RegExp(text).test(formElement.value) || formElement.value === ""){          

         $labels.forEach(label=>{
            if(label.id === formElement.name) label.classList.remove("form__container--error")
          })           
          
        }else{                    
          $labels.forEach(label=>{
            if(label.id === formElement.name) label.classList.add("form__container--error")
          })
          
        }
    }
  })  
})


 
d.addEventListener('submit' , async e=>{
  e.preventDefault()
   if(e.target === $form){

    $loader.classList.add('form__loader--active')
    
    try{
      let formData = new FormData($form)
      let res = await  fetch('https://formsubmit.co/ajax/josuelee428@gmail.com' , {
        method: "POST",
        body: formData,        
      })
      let text = await res.json()            

      $loader.classList.remove('form__loader--active')
      $resText.classList.add('form__response--active')

      setTimeout(()=> $resText.classList.remove('form__response--active'), 3000)     
      
      console.log(text)
    }catch(err){
      $resText.classList.add('form__response--active')
      $resText.textContent = 'Ocurrio un error al enviar el formulario'
      setTimeout(()=> $resText.classList.remove('form__response--active'), 3000)     
    }
  } 
  
})





  

  
