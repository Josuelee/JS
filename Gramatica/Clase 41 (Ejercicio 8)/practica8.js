const exercise24 = (array)=>{
    if(array === undefined) return console.warn(`Debe ingresar un arreglo`);

    if(!(array instanceof Array)) return console.warn(`"${array}" NO es un arreglo`);

    if(array.length === 0) return console.warn(`El arreglo no puede estar vacio`);    

    for(let element of array){
        if(typeof element !== "number") return console.warn(`"${element}" no es un arreglo`);
    }
    
    let array2 = array.map((a)=> a);   
    return console.info({
        ascendente: array.sort((a,b) => a-b),
        descendente: array2.sort((a,b)=> b-a)        
    });    
}
exercise24([1,2,3,4,5]);

const exercise25 = (array = undefined)=>{
    if(array === undefined) return console.warn(`Debe ingresar un arreglo`);

    if(!(array instanceof Array)) return console.warn(`"${array}" NO es un arreglo`);

    if(array.length === 0) return console.warn(`El arreglo no puede estar vacio`);    
            
    return console.info(`Arreglo original: ${array}\narreglo sin elementos duplicados ${[...new Set(array)]}`);
}

exercise25(["1","1","1",2,2,4,6,7,8,7]);

const exercise26 = (array) =>{
    if(array === undefined) return console.warn(`Debe ingresar un arreglo`);

    if(!(array instanceof Array)) return console.warn(`"${array}" NO es un arreglo`);

    if(array.length === 0) return console.warn(`El arreglo no puede estar vacio`);    

    for(let element of array ){
        if(typeof  element !== "number") return console.warn("El arreglo que ingreso no es un numero");
    }

    let sumaTotal = array.reduce((acumulador,el) => acumulador+el , 0),    
    promedio = Math.round((sumaTotal/array.length));
    console.log(sumaTotal)

    if(promedio>100) return console.warn('El promedio no puede ser mayor que 100');
    return console.info(`contenido: [${array}]\npromedio: ${promedio}`);
}
try{
    exercise26([93,97,99,97,92,82,98,95,98,95,100,98,95,98]);
}catch(Error){
    console.error(`Esta cometiendo un error ${Error}`)
}

let arregloPrueba =[1,2,1,3,1,2,4,5];
arregloPrueba.filter((a,index,arreglo)=> console.log(arreglo.indexOf(a)));
//El indexOf va a devolver el numero de indice que encontro primero
//en este caso encontro el 1 en el indice 0 , entonces los demas 1 que se repitan los devolvera en el indice 0
