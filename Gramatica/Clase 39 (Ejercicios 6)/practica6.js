const ejercicio18 = (texto = "") => {
  if (!texto) return console.warn("Tiene que ingresar un texto");
  if (typeof texto !== "string") return console.warn(`"${texto}" no es una cadena de texto`);
  let x = true,
    y= true,
    contadorVocales = 0,
    contadorConsonantes = 0,
    patron = /[aeiou]/ig,
    patron2= /[b-d,f-h,j-n,p-t,v-z]/ig;

    while (x !== false){      
      if(patron.test(texto)){        
        contadorVocales++;      
      }else{
        x = false;
      }
    }    
    while (y!==false){
      if(patron2.test(texto)){
        contadorConsonantes++;
      }else{
        y = false;
      }
    }    
    console.info(`El texto tiene ${contadorVocales} vocales y ${contadorConsonantes} consonantes`);
   
};
ejercicio18("Hola mundo");



const ejercicio19 = (nombre = "") =>{
  if (!nombre) return console.warn("Tiene que ingresar un nombre");
  ((nombre.length <= 2) || (/[0-9,!-@]/ig.test(nombre)))
  ? console.warn(`${nombre} no es un nombre valido`)
  : console.log(`el nombre ${nombre} es valido`)
}
ejercicio19("Jonathan Mircha");

const ejercicio20 = (correo = "") =>{
  if(!correo) return console.warn("Tiene que ingresar un correo");
  if(typeof correo !== "string") return console.warn(`"${correo}" no es una cadena de texto`)
  let  patron = /^[a-z._-\d]+@?[a-z\d-]{3,10}\.[a-z]{2,10}$/g;  
    (patron.test(correo)) 
    ? console.info(`El correo ${correo} es valido`)
    : console.warn(`El correo ${correo} no es valido`)
}
ejercicio20("jonathan_lee428@g-mail.com");


/* La expresion regular que usa jonhmircha para validar correos es
 /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */