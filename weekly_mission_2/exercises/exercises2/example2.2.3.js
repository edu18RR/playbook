//4. Agregar el constructor para guardar atributos
console.log("POO")

const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "18",
    color: "Pink"
}
//this.seguido de la propiedad del objeto (constructor)
class Ajolonauta {
    constructor (name,mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
        }
    }

    //objeto de JS
const woopa_obj_js = {}
console.log(woopa_obj_js)

const woopa = new Ajolonauta ("woopa" , "Node Js", "18", "pink") //los nombres que se le solicite
console.log(woopa)

const wooper = new Ajolonauta ("wooper" , "Java", "10", "Blue") //los nombres que se le solicite
console.log(wooper)
