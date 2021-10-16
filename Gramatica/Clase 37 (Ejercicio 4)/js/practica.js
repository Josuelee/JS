const exercise12 = (number=undefined) => {
    if(!number) return console.warn("Tiene que ingresar un numero en el ejercicio12");                    
    if(number < 0) return console.warn("NO puede ingresar un numero negativo en el ejercicio12");
    (number % 2 == 1)
            ? console.log(`${number} si es un numero primo`)
            : console.log(`${number} no es un numero primo`)    
}
exercise12(199);

const exercise13 = (number = undefined) => {
    if(!number) return console.warn("Tiene que ingresar un numero en el ejercicio13");                    
    if(number < 0) return console.warn("NO puede ingresar un numero negativo en el ejercicio13");                    
    
    (number % 2 == 0)
        ? console.log(`${number} si es un numero par `)
        : console.log(`${number} no es un numero par`)
}
exercise13(23);

const exercise14 = (number = undefined , validacion = "") => {    
    if(number === undefined) return console.warn("Tiene que ingresar un numero");
    if(typeof number !== "number") return console.warn(`"${number}" no es un numero`)        
    if(!validacion) return console.warn("Tiene que ingresar el tipo de grado que desea convertir");
    if(typeof validacion !== "string") return console.warn(`"${validacion}" no es un string`)        

    validacion = validacion.toUpperCase();

    if(validacion === "C"){
        console.log(`${number}C° = ${(number * (9/5))+32}F°`)
    }else if (validacion === "F"){
        let resultado = (number-32) * 5/9        
        console.log(`${number}F° = ${resultado.toFixed(2)}C°`)
    }else{
        console.warn("No ha ingresado el tipo de grado pedido C(celsius)/F(farenheit)");
    }

}

exercise14(20, "C");
