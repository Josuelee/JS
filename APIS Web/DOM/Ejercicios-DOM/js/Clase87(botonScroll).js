const d= document,
w = window;

//window.pageYOffSet = propiedad del objeto window , para ver cuanta distancia hay de el scroll hacia en este caso el eje Y , si quisiesemos otro eje seria el eje X

//document.documentElement = propiedad del dom html , que es para ver el scrollTop , si quisiesemos scrollLeft se escribia de esa misma forma

//w.scrollTo({recibe parametros , 1.el valor , 2.a donde ira})
export  function botonScroll(idBtn ){
    

  w.addEventListener("scroll" , ()=>{
    let $scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    ($scrollTop > 600) 
    ? d.querySelector(idBtn).classList.remove("scrollHidden")
    : d.querySelector(idBtn).classList.add("scrollHidden")

  })

  d.addEventListener("click" , (e)=>{
    if(e.target.matches(idBtn)){
      w.scrollTo({
        behavior: "smooth",
        top: "0"
      })
    }
  })

}
