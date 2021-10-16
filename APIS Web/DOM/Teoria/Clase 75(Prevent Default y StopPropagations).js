const divs = document.querySelectorAll(".box-container div")
const $link = document.querySelector(".box-container a")

function evento (e){
    console.log(`Hola ${this.className}`)
    e.stopPropagation()   
}

divs.forEach(div=>{
    div.addEventListener("click", evento)
})

$link.addEventListener("click" , (e)=>{
    console.log("moped")
    e.preventDefault()
    e.stopPropagation()
})

 

