//6.
console.log("POO")

const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "18",
    color: "Pink"
}
//delimitar información
class Ajolonauta {
    constructor (name,mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
        }

        sayHello () {
            return `${this.name} is saying Hello` //propiedades internas del objeto
        }
    }
//otro ejemplo de class

class Pokemon {
    constructor (name){
        this.name = name
    }
}
const Pikachu = new Pokemon ("Pikachu")
console.log(Pikachu)    

//objeto de JS

const woopa_obj_js = {}
console.log(woopa_obj_js)

const woopa = new Ajolonauta ("woopa" , "Node Js", "18", "pink") //los nombres que se le solicite
console.log(woopa)
console.log(woopa.sayHello())

const wooper = new Ajolonauta ("wooper" , "Java", "10", "Blue") //los nombres que se le solicite
console.log(wooper.sayHello)