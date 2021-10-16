const $inputFile = document.getElementById('inputFile')
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
    
  document.getElementById('container').prepend($progress)
  $progress.insertAdjacentElement('afterend' , $span)
  
  
  
  const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress' , e=>{
      let progress = parseInt(e.loaded * 100 / e.total) 
      $progress.value = progress
      $span.innerHTML = `<b>${file.name} , ${progress}%</b>`
    })
  
  
  
  fileReader.addEventListener('loadend' , e=>{
     uploader(file)
     setTimeout(()=>{
      document.body.removeChild($drop)
      document.body.removeChild($progress)
    }, 4000)
    })
}


document.addEventListener('change' , e=>{
  if($inputFile === e.target) {
    
    const arrayFile = Array.from(e.target.files)
    arrayFile.forEach(el=> uploaderProgress(el))
        
  }
})