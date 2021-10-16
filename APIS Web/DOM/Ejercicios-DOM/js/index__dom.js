import menuHamburger ,{} from "./Clase81(MenuHamburguesa).js"

import {digitalClock, alarmaDespertadora} from "./Clase82,83(Reloj_AlarmaDespertadora).js"

import{shorcuts} from "./Clase84(Eventos Del Teclado , shorcuts).js"

import {movimientoColision} from "./Clase85(Movimiento y colisiones).js"

import {cuentaRegresiva} from "./Clase86(Cuenta Regresiva).js"

import {botonScroll} from "./Clase87(botonScroll).js"

import darkMode , {} from "./Clase88 , 89(DarkMode).js"

import {responsive} from "./Clase90(responsiveDesigns).js"

import {responsiveTester} from "./Clase91(responsiveTester).js"

import detectarDispositivos from "./Clase92(detectarDisposivos).js"

import detectConection from "./Clase93(detectarConexion).js"

import {detectWebCam} from "./Clase94(deteccionWebCam).js"

import geolocation from "./Clase95(geolocalizacion).js"

import filtroBusqueda from "./Clase96(filtroBusqueda).js"

import sorteoDigital from "./Clase97(SorteoDigital).js"

import {responsiveSlider} from "./Clase98(ResponsiveSlider).js"

import {scrollSpy} from "./Clase99(ScrollSpy con IntersectionObserver).js"

import videoInteligent from "./Clase100(Video Inteligente).js"

import form_validator from "./Clase101(ValidacionFormulario).js"

import narradorVoz from "./Clase104(NarradorVoz).js"

const $d = document;

document.addEventListener("DOMContentLoaded" , ()=>{  
  menuHamburger(".hamburger", ".panel" , ".irSection")
  
  digitalClock("#reloj" , "#iniciarReloj" ,"#detenerReloj")
  
  alarmaDespertadora("assets/audio/alarma_5.mp3" , "#iniciarAlarma" , "#detenerAlarma")
  
  $d.addEventListener("keydown" , (e)=>{
    shorcuts(e)
    movimientoColision(e,".box-container" , ".box-container__item")
  })              

  cuentaRegresiva("Feliz Cumpleaños Josue 🎁" , "assets/audio/feliz-cumpleanos-feliz-.mp3")

  
  botonScroll(".botonScroll")

  responsive(
    "youtube", 
  `<a href="https://www.youtube.com/watch?v=LcGgtIRi-EU&t=1s" target = "_blank">irYoutube</a>`, 
  `<iframe width="560" height="315" src="https://www.youtube.com/embed/LcGgtIRi-EU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsive( 
   "maps" ,
  `<a href="https://goo.gl/maps/3ZitnoNVG7wcTeTU9" target = "_blank">irMapa</a>`, 
  `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.4075299287356!2d-90.50685275966381!3d14.609608802797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3b512ee9afb%3A0xc8255d5feb146d4a!2sUniversidad%20Galileo!5e0!3m2!1ses-419!2sgt!4v1612358971677!5m2!1ses-419!2sgt" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  
  responsiveTester("form")

  detectarDispositivos("detectDevices");
  
  detectWebCam("web");

  geolocation("geoLocation")

  
  filtroBusqueda(".filtroInput")

  sorteoDigital(".sorteo__list", "#btn")
  
  responsiveSlider(".slider__item")

  scrollSpy()

  form_validator()
  
})

darkMode(".btn-darkMode" , "darkModeStyle")
detectConection("detectConect")
videoInteligent()
narradorVoz()


