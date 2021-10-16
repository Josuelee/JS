/* Convertir de decimal a binario y binario a decimal */
const ejercicio15  = (numero = undefined , base = undefined) => {
    if (numero === undefined) return console.warn("Tiene que ingresar un numero");

    if (Math.sign(numero) === -1) return console.warn("No puede ingresar un numero negativo");

    if (typeof numero !== "number") return console.warn(`"${numero}" NO es un numero`)

    if (base === undefined) return console.warn("Tiene que ingresar una base");

    if (Math.sign(base) === -1) return console.warn("La base no puede ser negativa");

    if (typeof base !== "number") return console.warn(`La base "${base}" NO es un numero`)

    if(base === 2){
        return console.info(`Binario a decimal
        El numero binario ${numero} pasado a decimal es ${parseInt(numero,base)}`); //detecta que es un numero binario y quiero pasarlo a decimal
    }else if(base === 10){
        return console.info(`Decimal a binario
        el numero decimal ${numero} pasado a binario es ${numero.toString(2)}`);//cuando le digo base 2 significa que quiero que sea binario el numero
    }else{
        return console.warn("La base tiene que ser s2 o 10");
    }
}
ejercicio15(100,10);
const ejercicio16 = (numero = undefined , descuento =undefined) =>{
    if(numero === undefined) return console.warn("Tiene que ingresar un numero");

    if(typeof numero !== "number") return console.warn(`"${numero}" NO es un numero`);

    if(Math.sign(numero) === -1) return console.warn(`No puede ingresar un numero negativo`);

    if(numero === 0) return console.warn(`No puede ingresar un numero 0`);

    if(descuento === undefined ) return console.warn("Tiene que ingresar un descuento");

    if(typeof descuento !== "number") return console.warn(`el caracter "${descuento}" que ingreso en el descuento NO es un numero`);

    if(Math.sign(descuento) === -1) return console.warn(`${descuento} no puede ser negativo`);

    if(descuento === 0) return console.warn(`el descuento no puede ser 0`);    

    return console.info(`El total a pagar de ${numero} con el descuento del ${descuento}% es "$${(numero-((numero*descuento)/100))}"`)
    
}

ejercicio16(200 , 15);

const ejercicio17 = (year = undefined) => {
    if(!year) return console.warn("Tiene que ingresar un año") ;

    if(Math.sign(year) === -1) return console.warn(`El año no puede ser negativo`);

    const fecha = new Date();
    const total = fecha.getFullYear() - year;

    return  console.log(`El total de años que han pasado desde el año ${year} hasta el año ${fecha.getFullYear()} son ${total} años`)
    
}

ejercicio17(1985);



