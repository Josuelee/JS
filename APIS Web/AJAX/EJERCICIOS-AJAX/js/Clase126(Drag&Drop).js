
const $drop = document.getElementById('drop')

const uploader = (file)=>{
  const xhr = new XMLHttpRequest()
  xhr.addEventListener("readystatechange" , ()=>{
    if(xhr.readyState !== 4) return 
    
    if(xhr.status > 199 && xhr.status < 300){      
      console.log(JSON.parse(xhr.responseText))
    }else{    
      console.log(JSON.parse(xhr.responseText))            
    }
    
  })

  const formData =  new FormData()
  formData.append('fileInput' , file)
  
  xhr.open("POST" , 'assets/upload.php')
  xhr.setRequestHeader('enc-type' , 'multipartform-data')
  xhr.send(formData)
  
  
}

const uploaderProgress=(file)=>{
  const $progress = document.createElement('progress'),
  $span = document.createElement('span')
  
  $progress.value = 0
  $progress.max = 100
    
  $drop.insertAdjacentElement('afterend' , $progress)
  
  $progress.insertAdjacentElement('afterend' , $span)
  
  
  
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)

  fileReader.addEventListener('progress' , e=>{
    let progress = parseInt(e.loaded * 100 / e.total) 
    $progress.value = progress
    $span.innerHTML = `<b>${file.name} , ${progress}%<b>`
 })
      
  fileReader.addEventListener('loadend' , e=> {
    uploader(file)    
    setTimeout(()=>{
      document.body.removeChild($span)
      document.body.removeChild($progress)
    }, 4000)
  })  


}


$drop.addEventListener('dragover' , e=> {
  e.preventDefault()
  e.stopPropagation()
  
  $drop.classList.add('drop-zone--active')
})


$drop.addEventListener('dragleave' , e=> {
  e.preventDefault()
  e.stopPropagation()
  $drop.classList.remove('drop-zone--active')
})

$drop.addEventListener('drop' , e=>{
  e.preventDefault()
  e.stopPropagation()
  const files = Array.from(e.dataTransfer.files)  
  files.forEach(el=> {
    uploaderProgress(el)
    console.log(el)
  })
  $drop.classList.remove('drop-zone--active')

  
  
}) 
