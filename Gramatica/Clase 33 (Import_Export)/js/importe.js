/* Solo se puede tener un export default por cada import */
import {Resultado as total} from "./sumas.js";
import saludar,{PrimerUsuario as user1 } from "./usuarios.js";
if(user1.nombre === "Peter"){
    console.log(true)
}
console.log(total.suma(5,2));
console.log(total.resta(6,2));
console.log(user1.nombre);
console.log(user1.apellido);
console.log(user1.telefono1);
console.log(user1.telefono2);
saludar()
