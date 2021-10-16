const d = document
const $showContainer = d.getElementById("shows")

const searchShow = async (value) => {
  try {
    /* let res = await fetch("https://api.tvmaze.com/shows/38339") to find individual show*/
    
    $showContainer.innerHTML = `<img src="assets/img/oval.svg" alt="loading" class ='loader' >`;    
    let res = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    let json = await res.json()

    let $template = ""    
    
    if(!res.ok) throw {status: res.status , statusText: res.statusText}
    
    
    if(json.length === 0){
      $template += `<p>NO se encontro su busqueda</p>`
      
    }else if(json.length === 1){           
      
      let url = json[0].show.image
      ? json[0].show.image.medium
      : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
      
      $template +=  `  
      <figure class = "show show--individual" data-id = "${json[0].show.id}">
      <img src="${url}" alt="image" class = "show__img"> 
      <figcaption class = "show__text">${1}) ${json[0].show.name}</figcaption>
      </figure>     
      `      
    }else{
      for (let x = 0; x < json.length; x++) {                                 
        $template += `
        <figure class = "show" data-id = "${json[x].show.id}">
        <img src="${json[x].show.image
          ? json[x].show.image.medium
          : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'}" alt="image" class = "show__img"> 
          <figcaption class = "show__text">${x+1}) ${json[x].show.name}</figcaption>
          </figure>
          `
        }       
      }                 
      
      $showContainer.innerHTML = $template
      
    } catch (err) {
      $showContainer.innerHTML = `Ocurrio un error en su busqueda`
      console.log(err)
    }
  }
  
  const valuesRandom = ()=>{
    const values = ["show" , "elite" , "american" , "a" , "naruto" , "friends"]    
    searchShow(values[Math.floor(Math.random()*6)])
  }

  d.addEventListener("DOMContentLoaded" , ()=> valuesRandom())
  
  d.addEventListener("keydown", (e) => {  
    if (e.target.matches("#search")) {
      if (e.key === "Enter" && e.target.value !== "") {
        let value = e.target.value.toLowerCase()
        searchShow(value)
      }
    }
  })

d.addEventListener("submit" , (e)=> e.preventDefault())
d.addEventListener("click" , async (e)=>{
  if(e.target.matches(".show *")){
    $showContainer.innerHTML = `<img src="assets/img/oval.svg" alt="loading" class ='loader' >`;    
    let $showItem = e.target.parentElement
    
    let res = await fetch(`https://api.tvmaze.com/shows/${$showItem.getAttribute("data-id")}`)    
    let json = await res.json()
    
    let imgUrl = json.image 
    ? json.image.medium 
    : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
    
    let $description = json.summary 
    ? `<p class = "showItem__description">${json.summary.slice(3, -4)}</p>` 
    : '<p class = "showItem__description">Sin descripcion</p>'
    
    const $buttons  = json.genres.map(el=> `<button type="button" class="showItem__button">${el}</button>`)
    
    
    let $show = `
    <article class="showItem">
    <div class="showItem__container">
    <img src="${imgUrl}" alt="${json.name}" class="showItem__img">
    </div>          
    <div class="showItem__container2">
    <div class="showItem__information">
    <h3 class="showItem__title">${json.name}</h3>            
    <p class="showItem__rating"><span class="showItem__rating--span">RATING:</span> <strong>${json.rating.average}</strong></p>
    ${$description}
    <div class="showItem__buttons">
    ${$buttons.join("")}
    </div>
    </div>
    </div>          
    </article>
    `
    
    
    $showContainer.innerHTML= $show
    
  } else if(e.target.matches(".section-shows__back")) {
    
    e.preventDefault()
    valuesRandom()
  }
  
})