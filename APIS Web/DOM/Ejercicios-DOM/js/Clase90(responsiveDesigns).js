const d = document
export function responsive (div,mobileContent, desktopContent){
  const breakpoint = matchMedia("(min-width: 800px)") 
  
  function control (breakpointValue){
    if(breakpointValue.matches){
      d.getElementById(div).innerHTML = desktopContent
    }else {      
      d.getElementById(div).innerHTML = mobileContent
    }
  }

  addEventListener("resize" , ()=> control(breakpoint))
  control(breakpoint)      
}