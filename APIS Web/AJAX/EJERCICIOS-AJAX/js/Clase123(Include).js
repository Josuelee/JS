const include = (dataElement , url)=>{
  const xhr = new XMLHttpRequest()
  xhr.addEventListener('readystatechange' , ()=>{
    if(xhr.readyState !== 4) return
    if(xhr.status > 199 && xhr.status  < 300){      
      dataElement.outerHTML = xhr.responseText
    }else{
      dataElement.outerHTML =`Error${xhr.status}: Ocurrio un error al obtener el archivo`
    }
  })
  xhr.open("GET" , url)
  xhr.setRequestHeader('Content-type' , 'text/html; charset=utf-8')
  xhr.send()
}


document.addEventListener('DOMContentLoaded' , ()=>{
  document.querySelectorAll('[data-include]').forEach(el=> {
    include(el , el.dataset.include)    
  })
  
})

