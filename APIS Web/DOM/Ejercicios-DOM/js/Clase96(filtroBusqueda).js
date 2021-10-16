const d = document;
export default function filtroBusqueda(input) {
  const $sections = d.querySelectorAll(".card")

  d.addEventListener("keyup", e=>{
    if(e.target.matches(input)){

      if(e.key === "Escape") e.target.value = "";

      $sections.forEach(el=>{
        const text = el.textContent.trim().toLowerCase()
        text.includes(e.target.value)
          ? el.classList.remove("filter")          
          : el.classList.add("filter")
      })
    }
  })
  
  


}
