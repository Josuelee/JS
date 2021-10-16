/* La delegacion de eventos consiste en agregarle el evento al elemento padre , y que ese mismo evento que se le aplico al padre , se puede utilizar en un hijo o muchos hijos en especifico cuando yo los seleccione , tambien agregarle otras funcionalidades dependiendo del elemento hijo que se seleccione , eso se puede hacer con ifs 

metodo matches("nodo") , sirve para verificar si existe un nodo o no , devolvera true si si existe y si no , false*/

//en este caso yo agregare el evento al mayor elemento padre en el html que es el document y luego con ifs agregare funcionalidades dependiendo del nodo que desee que tenga esa funcionalidad

document.addEventListener("click" , (e)=>{    
    console.log(`Hola`, e.target )

    if(e.target.matches(".box-container a")){
        e.preventDefault()       
        document.getElementById("enlace").classList.add("link") 
    }

})

document.addEventListener("dblclick", (e)=>{
    if(e.target.matches(".box-container a")){
        e.preventDefault()
    document.getElementById("enlace").classList.remove("link")
    
    }
})