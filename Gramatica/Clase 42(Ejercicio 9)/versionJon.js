console.group("La forma en la que jon lo hizo");
class Peliculas {
    constructor({id,titulo,director,anioEstreno , pais , generos , calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anioEstreno = anioEstreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarID(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnioEstreno(anioEstreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static generosAceptados(){
        console.info(
            ` Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, 
            Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance,Sci-Fi, Short,
             Sport, Talk-Show, Thriller, War, Western.`
        );
    }

    validarCadenas(propiedad, valor){
        if(!valor) return console.warn(`NO ha ingresado una cadena de texto en ${propiedad}`);

        if(typeof valor !== "string") return console.warn(`${propiedad}: "${valor}" NO es una cadena de texto`);
        
        return true;
    }

    validarCadenasLongitud(propiedad,valor,longitud){
        if(this.validarCadenas(propiedad,valor))
            if(valor.length>longitud) return console.warn(`${propiedad}: "${valor}" No puede revasar los ${longitud} caracteres`);
    }

    validarNumeros(propiedad,valor){
        if(valor===undefined) return console.warn(`${valor}: No ha ingresado un numero en ${propiedad}`);

        if(typeof valor !== "number") return console.warn(`${propiedad}: "${valor}" NO es un numero`);

        return true;
    }

    validarArreglos(propiedad , valor){
        if(!(valor instanceof Array)) return console.warn(`${propiedad}: "${valor}" NO es un arreglo`);        
        if(valor.length === 0) return console.warn(`${propiedad} El arreglo "${valor}" no tiene datos`);

        for(let element of valor){
            if(typeof element !== "string") return console.warn(`${propiedad}: ${element}  NO es un string`);
            if(!element) return console.warn(`${propiedad}: Aunque ingreso un arrego "${valor}" esta vacio!`)
        } 

        return true;
    } 
    
    static get generosAceptadosArreglo(){
    return ["Action" , "Adult" , "Adventure" ,"Animation" , "Biography", "Comedy" , "Crime" , "Documentary" , "Drama" ,
    "Fantasy" , "Film Noir" , "Game-Show", "History", "Horror", "Musical", "Music"," Mystery"," News", "Reality-TV", "Romance","Sci-Fi"
    , "Short","Sport", "Talk-Show", "Thriller", "War", "Western"];
    }
    validarID(parametroID){
       if(this.validarCadenas("ID",parametroID))
        if(!(/^[a-z]{2}[0-9]{7}$/.test(parametroID)))
            return console.warn(`${parametroID} NO cumple con los datos requeridos 2 letras minusculas al principio y despues 8 numeros`);        
    }

    validarTitulo(parametroTitulo){        
        this.validarCadenasLongitud("Titulo", parametroTitulo ,100);
    }

    validarDirector(parametroDirector){
        this.validarCadenasLongitud("Director" , parametroDirector , 50);
    }

    validarAnioEstreno(parametroAnioEstreno){
        if(this.validarNumeros("Año de estreno" , parametroAnioEstreno))
            if(!(/^[0-9]{4}$/.test(parametroAnioEstreno))) return console.warn(`"${parametroAnioEstreno}" No tiene 4 digitos`);                     
    }    

    validarPais(parametroPais){
        this.validarArreglos("Pais De Estreno" , parametroPais);         
    }

    validarGeneros(parametroGeneros){
        if(this.validarArreglos("Genero" , parametroGeneros)){
            for(let genero of parametroGeneros){   
                if(!(Peliculas.generosAceptadosArreglo.includes(genero))) return console.warn(`${genero} No es un genero aceptado`);
            }
        }         
    }

    validarCalificacion(parametroCalificacion){
        if(this.validarNumeros("Calificacion: " , parametroCalificacion ))
            if((parametroCalificacion < 0) || (parametroCalificacion > 10))
                return  console.warn(`${parametroCalificacion} no puede ser menor que 0 o mayor que 10`);

           return this.calificacion = parametroCalificacion.toFixed(1);
        }      

    fichaTecnica(){
        console.info(`Ficha tecnica: `);
        console.info(`ID: ${this.id}\nTitulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.anioEstreno}\nPais: ${this.pais}\nGeneros: ${this.generos}\nCalificación ${this.calificacion}`);
    }       
}

Peliculas.generosAceptados();

/* const peli = new Peliculas({
    id: "tt10048342",
    titulo: "Gambito de dama",
    director:"Scott Frank",
    anioEstreno: 2020,
    pais: ["USA"],
    generos: ["Drama"],
    calificacion: 8.8
});

peli.fichaTecnica(); */

const pelis = [{
    id: "tt1004834",
    titulo: "Gambito de dama",
    director:"Scott Frank",
    anioEstreno: 2020,
    pais: ["USA"],
    generos: ["Drama"],
    calificacion: 8.8
},
{
    id: "tt0903747",
    titulo: "Breaking Bad",
    director: "Vince Gilligan",
    anioEstreno: 2008,
    pais: ["USA"],
    generos: ["Crime" , "Drama" , "Thriller"],
    calificacion: 9.5,
},
{
    id: "tt0944947",
    titulo: "Juego de Tronos",
    director: "David Benioff, D.B. Weiss",
    anioEstreno: 2011,
    pais: ["USA"],
    generos: ["Action" , "Adventure" , "Drama"],
    calificacion: 9.5,
}];

pelis.forEach(el => new Peliculas(el).fichaTecnica());

console.groupEnd();