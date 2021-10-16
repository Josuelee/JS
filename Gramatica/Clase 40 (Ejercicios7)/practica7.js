console.groupCollapsed(`La forma en la que lo hice`);

console.log(`----ejercicio22----`)
const ejercicio22 = (array = undefined )=>{
    if(array === undefined) return console.warn("Tiene que ingresar un arreglo");
    if(!(array instanceof Array)) return console.error(`"${arreglo}" no es un Arreglo`);   
    if(array.length === 0) return console.error("El arreglo esta vacio");
    for (const nuevoArreglo of array){
        if(typeof nuevoArreglo !== "number") return console.warn(`El arreglo que ingresa no es un arreglo`);
    }

    let numeroMayor = 0;    
    let numeroMenor = 0;
   for(let x =0; x<array.length; x++){       
        if(array[x]>numeroMayor) numeroMayor = array[x];
    }       
     numeroMenor = numeroMayor;
    for(let x=0; x<array.length; x++){
        if(array[x] < numeroMenor) numeroMenor = array[x];
    }
   console.log(numeroMayor)
   console.log(numeroMenor)       
}

ejercicio22([105,500,453, 76 , 1008,896,100]);
console.log(`----ejercicio23----`)

const ejercicio23 = (arreglo = undefined) =>{
    if(arreglo === undefined) return console.warn(`Tiene que ingresar un arreglo`);
    if(!(arreglo instanceof Array)) return console.warn(`"${arreglo}" no es un arreglo`)        
    const objeto = {
        arreglo1: [arreglo.forEach(el=>{
            if(el%2 == 0) console.log(`${el} es un numero par`);
        })],        
        arreglo2: [arreglo.forEach(el=>{            
            if(el%2==1) console.log(`${el} es un numero impar`);
        })]
    }            
}

ejercicio23([1,2,3,4,5,6,7,8,9,10]); 

console.groupEnd();

console.groupCollapsed(`La forma en la que hizo Jon`)
console.log(`------------Ejercicio 21, 22 y 23 forma jonMircha------`)

const ejercicio21 = (arreglo = undefined) =>{
    if(arreglo === undefined) return console.warn("Tiene que ingresar un arreglo");
    if(!(arreglo instanceof Array)) return console.error(`"${arreglo}" no es un Arreglo`)    
    if (arreglo.length === 0) return console.error("El arreglo esta vacio");
    arreglo.forEach(el=>{
        if (typeof el !== "number") return console.warn("El arreglo que ingreso no es un numero");
    }); 
    const nuevoArreglo = arreglo.map(el => el*el); //El método map() crea un nuevo array aplicandole la funcion a todos los elementos del arreglo al cual se le llamo map
    return console.info(`el arreglo ${arreglo} elevado al cuadrado ${nuevoArreglo}`);
        
}
ejercicio21([1,2,3,4,5,6,7,3,9]);

const ejercicio22Jon = (array = undefined) =>{
    if(array === undefined) return console.warn("Tiene que ingresar un arreglo");
    if(!(array instanceof Array)) return console.error(`"${arreglo}" no es un Arreglo`);   
    if(array.length === 0) return console.error("El arreglo esta vacio");
    for (const nuevoArreglo of array){
        if(typeof nuevoArreglo !== "number") return console.warn(`El arreglo que ingresa no es un arreglo`);
    }
    //Aca estoy usando el spred operator para poder usar un arreglo con Math.max 
    // ya que ando expandiendo el arreglo en numeros  para luego aplicarle math.max
    return console.info(`Arreglo: ${array} \nNumero Mayor: ${Math.max(...array)}\nNumero Menor${Math.min(...array)}`);
}

ejercicio22Jon([1,2,3,4]);

const ejercicio23Jon = (array=undefined) =>{
    //Metodo filter: El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    if(array === undefined) return console.warn("Tiene que ingresar un arreglo");
    if(!(array instanceof Array)) return console.error(`"${arreglo}" no es un Arreglo`);   
    if(array.length === 0) return console.error("El arreglo esta vacio");
    for (const nuevoArreglo of array){
        if(typeof nuevoArreglo !== "number") return console.warn(`El arreglo que ingresa no es un arreglo`);
    }

    return console.info({
        pares: array.filter(num => num%2===0),
        impares: array.filter(num=> num%2===1)
    })    
}

ejercicio23Jon([1,2,3,4,5,6,7,8]);

console.groupEnd();






