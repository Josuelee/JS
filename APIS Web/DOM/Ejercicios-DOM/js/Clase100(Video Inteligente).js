const d = document
export default function videoInteligent(){
  const $video = d.getElementById("inteligentVideo")

  const execute = ()=>$video.play()  
  const pause = ()=>$video.pause()  

  const callback = (entries)=>{
    entries.forEach(entry=>{
      entry.isIntersecting
        ? execute()      
        : pause()        
    })
    window.addEventListener("visibilitychange", ()=>{
      if(d.visibilityState === "hidden") pause()              
    })
  }
  const observer = new IntersectionObserver(callback, {threshold: .5})
  observer.observe($video)

  

}