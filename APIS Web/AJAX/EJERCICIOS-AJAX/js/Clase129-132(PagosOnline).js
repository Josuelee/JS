import {STRIPE_KEYS} from "./stripe-key.js"

const $fragment = document.createDocumentFragment(),
$tacos= document.getElementById("tacos")
const $template = document.getElementById("template").content


console.log($fragment)
console.log($tacos)
console.log($template)

const stripeAutorization = {
  headers: {
    "Authorization":
      `Bearer ${STRIPE_KEYS.secret_key}`,
  },
}



Promise.all([
  fetch("https://api.stripe.com/v1/products", stripeAutorization),
  fetch("https://api.stripe.com/v1/prices", stripeAutorization)
])
.then((res) => Promise.all(res.map(el=>el.json()))  )
.then(json=> {  
  console.log(json)
  const products = json[0].data,
  prices = json[1].data

  prices.forEach(price=>{
    const data = products.filter(product=> product.id === price.product)
        
    $template.getElementById("image").src = data[0].images[0]   
    $template.getElementById("text").innerHTML = `<p>${data[0].name}</p>`
    $template.getElementById("taco").dataset.id = price.id

    const $clone = document.importNode($template, true)
    $fragment.appendChild($clone)    
    
    console.log($fragment)
  })

  $tacos.append($fragment)      
  /* console.log(products, "PRODUCTO")
  console.log(prices , "PRECIO") */
  
})

document.addEventListener("click" , (e)=>{
  if(e.target.matches(".taco *")){
    const price = e.target.parentElement.dataset.id

    Stripe(STRIPE_KEYS.public_key)
    .redirectToCheckout({
      lineItems:[{price, quantity:1}],      
      cancelUrl: "http://127.0.0.1:5500/assets/cancel.html",
      successUrl: "http://127.0.0.1:5500/assets/succes.html",
      mode:"payment"
    })
    .then(res=> console.log(res))
    .catch(err=>console.log(err))
  }
  
})













