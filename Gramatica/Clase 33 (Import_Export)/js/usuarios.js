class user{
  constructor(nombre,apellido,telefono1,telefono2){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono1 = telefono1;
    this.telefono2 = telefono2;
  }

  mophed(){
    console.log("Mophetich")
  }
}
export default function saludar(){
  console.log("Hola soy un saludo");
}

export let PrimerUsuario = new user("Peter" ,"Lee" ,"24", "46");
    