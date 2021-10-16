const d = document;
const ls = localStorage;
export default function darkMode(btnDark, styleDark){  
  const $btnDark = d.querySelector(btnDark),
  $sections = d.querySelectorAll("[data-darkMode]");

  const darkMode = ()=>{
    $sections.forEach(el=> el.classList.add(styleDark))
    d.querySelector(".box-container").classList.add("boxContainer--darkMode")            
    $btnDark.textContent = "🌞"
    ls.setItem("theme" , "dark")    
  }
  
  const lightMode = ()=>{1
    $sections.forEach(el=> el.classList.remove(styleDark))
    d.querySelector(".box-container").classList.remove("boxContainer--darkMode")        
    $btnDark.textContent = "🌜";
    ls.setItem("theme" , "light")
  }

  d.addEventListener("click" , (e)=>{
    if(e.target.matches(btnDark)){            
      if($btnDark.textContent === "🌜"){        
        darkMode();
      }else if($btnDark.textContent === "🌞"){
        lightMode();    
      }    
  }  
})
                      
  d.addEventListener("DOMContentLoaded" , ()=>{
    if(ls.getItem("theme") === null)  ls.setItem("theme" , "light");

    if(ls.getItem("theme") === "light") lightMode();

    if(ls.getItem("theme") === "dark") darkMode();

  })
  

} 