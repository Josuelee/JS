const d = document

export const scrollSpy = () => {

  const $sections = d.querySelectorAll("section[data-scroll-spy]")
  
  const callback = (entries)=>{    
    entries.forEach(entry=>{

      const idSection = entry.target.id//RECORRE TODAS LAS SECCIONES 1 POR 1
      if(entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${idSection}"]`).classList.add("panel__link--active")                        
      }else{                
        d.querySelector(`a[data-scroll-spy][href="#${idSection}"]`).classList.remove("panel__link--active")
      }
    })     

  }
  const observer = new IntersectionObserver(callback , {
    threshold: .5
  })

  $sections.forEach(section=> observer.observe(section))
}
