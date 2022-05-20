import Viajero from './viajero.js'
/* 
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/


const viajero1 = new Viajero ("Carlos", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) //Método de la calse padre
console.log(viajero1.getGeneralInfo()) //Método de la clase hija