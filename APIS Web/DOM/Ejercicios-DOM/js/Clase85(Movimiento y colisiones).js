const $d = document
let x=0,
y=0;

export const movimientoColision = (e, boxContainer , item)=>{
  const $boxContainer = $d.querySelector(boxContainer)
  const $item = $d.querySelector(item),
  $limitItem = $item.getBoundingClientRect(),
  $limitBox = $boxContainer.getBoundingClientRect()

  switch(e.keyCode){
    //derecha
    case 39:
      if($limitItem.right < $limitBox.right) {        
        x++;
        e.preventDefault()
      }
    break;
    //izquierda
    case 37:   
      if($limitItem.left > $limitBox.left) {
        x--
        e.preventDefault()   
      };
    break;
    //arriba
    case 38:
      if($limitBox.top <  $limitItem.top)
      {
        y--;
        e.preventDefault()
      }
    break;
    //abajo
    case 40:
      if($limitItem.bottom < $limitBox.bottom) {
        y++       
        e.preventDefault()
      }
    break;
  }
  $item.style.transform =  `translate(${x*10}px , ${y*10}px)`    
}







