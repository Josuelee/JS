const d = document, 
n = navigator


export const detectWebCam = (video)=>{
 
  const $video = d.getElementById(video)
  if(n.mediaDevices){
    n.mediaDevices
    .getUserMedia({audio: false , video:{width:1000 , height:580}})
    .then(el=>{
      $video.srcObject = el
      $video.play()
      console.log(el)
    })
    .catch(error => {
      $video.insertAdjacentHTML("beforebegin" , `<p> <mark>Ocurrio un error ${error}</mark></p>`)
      console.log(`Ha ocurrido un error en la webcam ${error}`)
    })
    
  }

}