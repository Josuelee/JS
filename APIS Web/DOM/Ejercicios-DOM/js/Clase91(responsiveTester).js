const d = document;

export const responsiveTester =(form)=>{ 

 const $form = d.getElementById(form)
 let openPage;

  d.addEventListener("submit" , e=>{
    if(e.target === $form) {
      e.preventDefault()
      openPage = open($form.url.value , "tester" , `innerWidth = ${$form.ancho.value} ,
       innerHeight = ${$form.alto.value}`)
    }
  })

  d.addEventListener("click", e=>{
    if(e.target === $form.cerrarPage) openPage.close()
  })
  

  
}


