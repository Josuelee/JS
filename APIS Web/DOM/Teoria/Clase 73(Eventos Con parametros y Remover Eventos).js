
/* La forma en la que se puede pasar un parametro a la funcion manejadora es , primero pasando una arrow function o funcion anonima , y dentro de ella ya invocar la funcion con el parametro , */

const $eventoParametro = document.getElementById("eventoParametro")

function eventoParametro(parametro = "Peter"){
    alert(`Hola ${parametro}`)
}

$eventoParametro.addEventListener("dblclick" , ()=> eventoParametro("moped"))


/* Esto de eliminar solo aplica a las funciones manejadores multiple */

/* Eliminar un evento 
se utiliza removeEventListener("nombreEvento" ,"functionHandler")
El remove tiene que estar dentro de la funcion manejadora que se pasa en el segundo parametro , por eso no se puede usar una funcion anonima en el mismo momento , tengo que declararla anteriormente :


*/

const $removeEvento = document.getElementById("removeEvento")
const $removeEvento2 = document.getElementById("removeEvento")

//Manera correcta
const primerFuncionRemover = ()=>{
    alert("Hola amigoooos , primero ejecuto y luego se eliminara")
    $removeEvento.removeEventListener("click" , primerFuncionRemover)
}


$removeEvento.addEventListener("click" , primerFuncionRemover)



//Manera incorrecta
const segundaFuncionRemove = () =>{
    alert("Hola amigooos esta funcion ni se podra ejecutar porque estoy eliminando mal")
}

$removeEvento2.addEventListener("click" , segundaFuncionRemove)

$removeEvento2.removeEventListener("click" , segundaFuncionRemove)
/* Ni permite que se ejecute el evento porque justo lo creo lo elimino  */





