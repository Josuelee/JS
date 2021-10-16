/*Fase de burbuja: desde el ultimo hijo se aplicara el evento hasta el primer padre

si no se pone el tercer parametro el valor por defecto sera de burbuja pero si pongo el tercer parametro para que sea de burbuja tengo que poner false

Fase de captura: desde el primer padre hasta el ultimo hijo se aplicara el evento 

Se tiene que poner si o si el tercer parametro


pueden recibir un tercer parametro de tipo objeto , unas propiedades serian capture(false si es fase de burbuja , true si es de captura) y once para que el evento se ejecute 1 sola vez
*/

const padre = document.querySelectorAll(".box-container div")

function flujoEventos (e){
    console.log(`El evento va por ${this.className} generado por ${e.target.className}`)
}

 padre.forEach(div=>{
    //Fase de burbuja
    //div.addEventListener("click" , flujoEventos)
    //div.addEventListener("click" , flujoEventos , false)
    //Fase de captura
    //div.addEventListener("click" , flujoEventos ,true)

    div.addEventListener("click", flujoEventos ,{
        capture: false,
        once: true
    })
}) 










