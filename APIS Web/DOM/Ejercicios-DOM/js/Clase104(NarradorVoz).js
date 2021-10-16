export default function narradorVoz(){  
  const $select = document.getElementById("selectLanguage")
  const $fragment = document.createDocumentFragment()       
  const speechMessage = new SpeechSynthesisUtterance()

  let voice = []

  document.addEventListener("DOMContentLoaded" , ()=>{
    speechSynthesis.addEventListener("voiceschanged" ,e=>{
      voice = speechSynthesis.getVoices()
      voice.forEach(language=>{
        const $option = document.createElement("option")
        $option.value = language.name
        $option.textContent = `${language.name}-${language.lang}`        
        $fragment.prepend($option)
      })
      $select.prepend($fragment)
    })        
  })
    
  document.addEventListener("change" , e=>{
    if(e.target === $select){                                      
      speechMessage.voice = voice.find(element=> element.name === e.target.value)                  
    }    
  })
  
  document.addEventListener("click" , e=>{
    if(e.target.matches("#languageButton")){
      speechMessage.text = document.getElementById("LanguagetextArea").value      
      speechSynthesis.speak(speechMessage)      
    }
  })
  
  
  
  
}