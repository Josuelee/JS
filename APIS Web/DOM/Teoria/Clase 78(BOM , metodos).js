/* Metodos del bom (vienen del window)
    window.opend(): abre una ventana,
    window.close(): cierra una ventana
    window.print(): te manda a imprimir la pagina
 */


 const $abrir = document.getElementById("btnAbrir"),
  $cerrar = document.getElementById("btnCerrar"),
  $imprimir = document.getElementById("btnImprimir")

  let guardar;
  $abrir.addEventListener("click" , (e)=>{
    guardar = open("https://youtube.com")        
  })

  $cerrar.addEventListener("click" , (e)=>{
    guardar.close()
  })

  $imprimir.addEventListener("click" , ()=>{
      print()
  })