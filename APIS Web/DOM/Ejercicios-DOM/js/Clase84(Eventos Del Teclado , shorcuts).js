const $d = document

export const shorcuts = (e)=>{
  if((e.key === "a") && (e.altKey) ){
    alert("Hola baidon")
  }

  if(e.key === "p" && e.altKey){
    prompt("Ingrese el nombre de baidon")
  }

  if(e.key === "c" && e.altKey){
    confirm("Si o no")
  }
}


/* Eventos de teclado:
  keydown: cuando pulsamos una teclada
  keyup: cuando soltamos la tecla
  keypress: cuando mantenemos pulsada la tecla
  
  propiedades importantes:
  type
  key
  keyCode
  
  altKey: true/false
  ctrlKey: true/false
  shiftKey: true/false
  */
 
 
 /* console.log(e.type)
 console.log(e.key)
 console.log(e.keyCode)
 console.log(`ctrl: ${e.ctrlKey}`)
 console.log(`alt: ${e.altKey}`)
 console.log(`shift: ${e.shiftKey}`)  
 console.log(e) */