console.groupCollapsed("La forma en la que yo lo hice");
class Pelicula {
    constructor(id,titulo,director,anioEstreno,pais,genero,calificacion){
        this.id= id
        this.titulo = titulo
        this.director = director
        this.anioEstreno = anioEstreno
        this.pais = pais
        this.genero = genero
        this.calificacion = calificacion
    }        
    
    static generosAceptados(){
        console.info(`Estos son los generos aceptados:`)
        console.info(`Action,Adult,Adventure,Animation,Biography,Comedy,Crime
        Documentary , Drama , Family , Fantasy , Film Noir , Game-Show, History
         , Horror, Musical , Music , Mystery , News, Reality-TV , Romance,Sci-FI
         ,Short, Sport , Talk-Show, Thriller , War , Western` )
    }       

    fichaDePelicula(){
        console.info(`Ficha Tecnica:`);
        console.info(`ID: ${this.id}
        Titulo: ${this.titulo}
        Director: ${this.director}
        Año De Estreno: ${this.anioEstreno}
        Pais: ${this.pais}
        Genero: ${this.genero}
        Calificacion: ${this.calificacion}`);
    }
}
const peliculas = (id = "",titulo = "",director = "",anioEstreno = undefined,pais = "",genero = "",calificacion = undefined) =>{
    if(!id) return console.warn("Tiene que ingresar un texto en el ID");

    if(!titulo) return console.warn("Tiene que ingresar un titulo");

    if(!director) return console.warn("Tiene que ingresar un director");

    if(anioEstreno === undefined) return console.warn("Tiene que ingresar un año de estreno");

    if(pais.length === 0) return console.warn("Tiene que ingresar un pais de estreno");

    for(let element of pais) {
        if(typeof element !== "string") return console.warn(`${element} NO es una cadena de texto`)
        if(!element) return console.warn("El pais no puede venir vacio");
    }

    if(genero.length === 0) return console.warn("Tiene que ingresar un genero");

    for(let element of genero) {
        if(typeof element !== "string") return console.warn(`${element} NO es una cadena de texto`)
    }

    if(calificacion === undefined)  return console.warn("Tiene que ingresar una calificacion");
    
    if(!(/^[a-z]{2}[0-9]{8}$/.test(id))) return console.warn(`Su ID "${id}" esta incorrecto tiene que tener 2 letras al inicio y despues 8 numeros`);

    if(titulo.length > 100) return console.warn(`El titulo "${titulo}" no puede revasar los 100 Caracteres`);

    if(director.length > 50) return console.warn(`El director "${director}" no puede revasar los 50 caracteres`);
    
    if(!(/^[0-9]{4}$/.test(anioEstreno))) return console.warn(`Su año de estreno ${anioEstreno} esta incorrecto , tiene que tener 4 digitos`);

    if (!(pais instanceof Array)) return console.warn("El pais debe ser introducido en forma de arreglo");
    
    if(!(genero instanceof Array)) return console.warn("Los generos deben ser introducidos en forma de arreglo");    
            
    if (calificacion < 0 ) return console.warn("la calificacion no puede ser menor que 0");

    if (calificacion >10 ) return console.warn("la calificacion no puede ser menor que 10");

    
    for(let element of genero){       
        if((element !== "action")&&(element !=="adult")&& (element !== "adventure") &&(element !=="animation") &&(element !== "biography") 

        && (element !== "comedy") && (element  !== "crime") && (element !== "documentary") && (element !== "drama") && (element !== "family") 
    
        && (element !== "fantasy") && (element  !== "film noir") && (element !== "game-show") && (element !== "history") && (element !== "horror")
    
        && (element !== "musical") && (element  !== "music") && (element !== "mystery") && (element !== "news") && (element !== "reality-tv") 
    
        && (element !== "romance") && (element  !== "sci-fi") && (element !== "short") && (element !== "sport") && (element !== "talk-show") 
    
        && (element !== "thriller") && (element  !== "war") && (element !== "western")){ 
    
            return console.warn(`${element} no esta en la lista de generos aceptados`);
        }  
    }   


    const peli = new Pelicula(id,titulo,director,anioEstreno,pais,genero,calificacion);
    Pelicula.generosAceptados();
    peli.fichaDePelicula();    
}

peliculas(
    "tt10048342",
    "Gambito de dama",
    "Scott Frank",
    2020,
    ["USA"],
    ["action"],
    10
);

console.groupEnd();








